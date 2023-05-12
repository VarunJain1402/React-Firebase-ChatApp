// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.Vite_API_Key,
  authDomain: "react-chat-app-b8a69.firebaseapp.com",
  projectId: "react-chat-app-b8a69",
  storageBucket: "react-chat-app-b8a69.appspot.com",
  messagingSenderId: "358894982501",
  appId: "1:358894982501:web:166eabf39b58770f74bd8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFireStore()
export const storage = getStorage()