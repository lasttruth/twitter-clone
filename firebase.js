// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC9cm0cJQUUcYBBnwUS0fzNFryNlo0V2A",
  authDomain: "twitter-clone-7a788.firebaseapp.com",
  projectId: "twitter-clone-7a788",
  storageBucket: "twitter-clone-7a788.appspot.com",
  messagingSenderId: "593483862222",
  appId: "1:593483862222:web:757d973057a599cb4a809f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
