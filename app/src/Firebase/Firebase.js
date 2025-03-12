// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWAVDiiR9NR21YwtrOSl8QN9wMGnmbSBc",
  authDomain: "expenses-d358a.firebaseapp.com",
  projectId: "expenses-d358a",
  storageBucket: "expenses-d358a.firebasestorage.app",
  messagingSenderId: "542987090685",
  appId: "1:542987090685:web:7fa31ad2fbae5ddf365c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export { app };
