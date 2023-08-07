// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQc2VCUH__EVRl_dVt249y4-0XmOCB-Sc",
  authDomain: "trello-clone-66d19.firebaseapp.com",
  projectId: "trello-clone-66d19",
  storageBucket: "trello-clone-66d19.appspot.com",
  messagingSenderId: "173177702165",
  appId: "1:173177702165:web:f26323cb78f1591614cb1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);