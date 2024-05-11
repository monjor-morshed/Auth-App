// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "uth-app-1bc4c.firebaseapp.com",
  projectId: "uth-app-1bc4c",
  storageBucket: "uth-app-1bc4c.appspot.com",
  messagingSenderId: "684825535768",
  appId: "1:684825535768:web:1f970be71c6f3f78d8aa6d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
