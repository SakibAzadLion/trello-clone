import { createContext, useState } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';

import { db } from '../config/firebase';

export const CardContext = createContext();
export const CardMethodsContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  console.log(cards);

  const getCards = async () => {
    const cardsRef = collection(db, 'cards');

    const q = query(cardsRef, where('userId', '==', 'newuser'));

    try {
      const newCards = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        newCards.push({ id: doc.id, ...doc.data() });
      });

      setCards(newCards);
    } catch (err) {
      console.log(err);
    }
  };

  const createCard = async (desc) => {
    const newCard = {
      desc,
      cover: {
        color: null,
        image: null,
      },
      labels: [],
      userId: 'newuser',
      createdAt: serverTimestamp(),
    };

    let createdCard = null;

    try {
      createdCard = await addDoc(collection(db, 'cards'), newCard);

      setCards([...cards, { id: createdCard.id, ...newCard }]);
    } catch (err) {
      console.log(err);
    }

    return createdCard;
  };

  const updateDesc = async (cardId, desc) => {
    const cardRef = doc(db, 'cards', cardId);

    try {
      await updateDoc(cardRef, {
        desc,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateCover = async (cardId, cover) => {
    const cardRef = doc(db, 'cards', cardId);

    try {
      await updateDoc(cardRef, {
        cover,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateLabels = async (cardId, labels) => {
    const cardRef = doc(db, 'cards', cardId);

    try {
      await updateDoc(cardRef, {
        labels,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      <CardMethodsContext.Provider
        value={{ getCards, createCard, updateLabels, updateCover, updateDesc }}
      >
        {children}
      </CardMethodsContext.Provider>
    </CardContext.Provider>
  );
};
