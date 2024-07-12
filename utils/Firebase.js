// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClSqj0nW7e0RfaTKk4uoNa6vdkUjFJwN4",
  authDomain: "dbregional-aa676.firebaseapp.com",
  projectId: "dbregional-aa676",
  storageBucket: "dbregional-aa676.appspot.com",
  messagingSenderId: "214975666068",
  appId: "1:214975666068:web:38bc305da14a86bf422181",
  measurementId: "G-PFKRW7Q5RY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const fire = getFirestore(app);
const storage = getStorage(app);
const authentic = getAuth(app);

export { app, db, fire, storage, authentic };
