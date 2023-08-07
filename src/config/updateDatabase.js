import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { lists } from '../data/index.js';
import { db } from './firebase.js';



const updateLists = () => {
    lists.forEach(async (curList) => {
        // Add a new document in collection "cities"
        try {
            await addDoc(collection(db, "lists"), {
                ...curList,
                createdAt: serverTimestamp(),
            });
        } catch (err) {
            console.log(err);
        }
    });
}

updateLists();