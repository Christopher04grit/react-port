import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCPEKnzAkLga9hZNUb31nUtp8gN-e7yR_Y",
  authDomain: "portfolio-project-page.firebaseapp.com",
  projectId: "portfolio-project-page",
  storageBucket: "portfolio-project-page.appspot.com",
  messagingSenderId: "826812684708",
  appId: "1:826812684708:web:8b7ade96fa19e77436c931"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);