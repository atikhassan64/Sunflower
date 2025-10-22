// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPvkTVBb0ifWo19hMiDk7zmTyX3PpGl8w",
  authDomain: "atik-assignment-nine.firebaseapp.com",
  projectId: "atik-assignment-nine",
  storageBucket: "atik-assignment-nine.firebasestorage.app",
  messagingSenderId: "673996770597",
  appId: "1:673996770597:web:983a70c53cc2b388235ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);