import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getFireStore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy0y8cWmpTdaUcfopVPfOnREhrkUY52ls",
  authDomain: "test-1786a.firebaseapp.com",
  projectId: "test-1786a",
  storageBucket: "test-1786a.appspot.com",
  messagingSenderId: "282023190371",
  appId: "1:282023190371:web:f1ea33c187f9a43506fd56",
  measurementId: "G-BPHVSVMFT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFireStore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();