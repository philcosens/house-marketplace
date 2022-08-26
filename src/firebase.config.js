// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANyAM1Dc9OPi2bzcr3bX5IXvZ6W2SmNZg",
  authDomain: "house-marketplace-52973.firebaseapp.com",
  projectId: "house-marketplace-52973",
  storageBucket: "house-marketplace-52973.appspot.com",
  messagingSenderId: "858514574179",
  appId: "1:858514574179:web:a1aa6ac9c63d85e2366156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()