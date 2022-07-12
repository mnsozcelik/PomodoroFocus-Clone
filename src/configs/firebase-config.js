import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBht6VDZ6s3EBeUZvNfRhyOERSWdLMOz8o",
    authDomain: "reactjsapp-b99d8.firebaseapp.com",
    projectId: "reactjsapp-b99d8",
    storageBucket: "reactjsapp-b99d8.appspot.com",
    messagingSenderId: "840649248208",
    appId: "1:840649248208:web:135ed7ef96368a0297fdd5"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);