// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKrqbNk6lkzcNkBJXOkq5ClVjasU7n_yM",
  authDomain: "project-c9532.firebaseapp.com",
  projectId: "project-c9532",
  storageBucket: "project-c9532.firebasestorage.app",
  messagingSenderId: "496636295458",
  appId: "1:496636295458:web:f5b87cfa2a37f4d0c94d7b",
  measurementId: "G-4F1D6CD2VE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;