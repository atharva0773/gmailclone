// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC01bRjgVGDdRiLr3k7H5x4W3UG6avJets",
  authDomain: "clone-9c598.firebaseapp.com",
  projectId: "clone-9c598",
  storageBucket: "clone-9c598.firebasestorage.app",
  messagingSenderId: "291017837611",
  appId: "1:291017837611:web:10bc8f70c2cf9debadee6e",
  measurementId: "G-J8ZH9JM4RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider= new GoogleAuthProvider(); 





