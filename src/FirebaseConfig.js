// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqWjWY_c0I-8iCUtPdtMxgg7FPnjai-v8",
  authDomain: "quiz-app-cca8f.firebaseapp.com",
  projectId: "quiz-app-cca8f",
  storageBucket: "quiz-app-cca8f.appspot.com",
  messagingSenderId: "994353508010",
  appId: "1:994353508010:web:c3abb45f30568e0149ead3",
  measurementId: "G-F5G1V537ST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
