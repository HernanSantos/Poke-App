// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYhhaTh2kGcMifOnmPKybVsDJ1BceNX4I",
  authDomain: "poke-app-36ac3.firebaseapp.com",
  projectId: "poke-app-36ac3",
  storageBucket: "poke-app-36ac3.appspot.com",
  messagingSenderId: "652192058337",
  appId: "1:652192058337:web:1a66190f583b04baff60a0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);