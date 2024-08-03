// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3UQ9Pyy4lHFd1S0OuUMY8ee5eUur7KHU",
  authDomain: "hspantryapp-161cc.firebaseapp.com",
  projectId: "hspantryapp-161cc",
  storageBucket: "hspantryapp-161cc.appspot.com",
  messagingSenderId: "71517607505",
  appId: "1:71517607505:web:18872ee72959292fe88a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export{app, firestore}