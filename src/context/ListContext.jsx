import { createContext, useState } from 'react';
import {
  collection,
  doc,
  query,
  where,
  orderBy,
  getDocs,
  updateDoc,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore';

import { db } from '../config/firebase';

export const ListContext = createContext();
export const ListMethodsContext = createContext();

export const ListProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  const getLists = async () => {
    const listsRef = collection(db, 'lists');

    const q = query(
      listsRef,
      where('userId', '==', 'newuser'),
      orderBy('createdAt')
    );

    try {
      const newLists = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        newLists.push({ id: doc.id, ...doc.data() });
      });

      console.log('getLists', newLists);
      setLists(newLists);
    } catch (err) {
      console.log(err);
    }
  };

  const createList = async (title) => {
    const newList = {
      title,
      cards: [],
      userId: 'newuser',
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'lists'), newList);
    } catch (err) {
      console.log(err);
    }
  };

  const updateListsCards = () => {
    lists.forEach(async (curList) => {
      const listRef = doc(db, 'lists', curList.id);

      try {
        await updateDoc(listRef, {
          cards: curList.cards,
        });

        console.log('updateListsCards');
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <ListContext.Provider value={{ lists, setLists }}>
      <ListMethodsContext.Provider
        value={{ getLists, updateListsCards, createList }}
      >
        {children}
      </ListMethodsContext.Provider>
    </ListContext.Provider>
  );
};
