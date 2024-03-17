// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-40da0.firebaseapp.com",
  projectId: "real-estate-40da0",
  storageBucket: "real-estate-40da0.appspot.com",
  messagingSenderId: "546629921708",
  appId: "1:546629921708:web:e9acd9ed82bb9fb45ca809"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);