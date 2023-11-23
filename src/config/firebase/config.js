// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY4XIPnOPi_9P3XOBcS33LdhjKh5iRJbU",
  authDomain: "sociops-5362c.firebaseapp.com",
  projectId: "sociops-5362c",
  storageBucket: "sociops-5362c.appspot.com",
  messagingSenderId: "472051080589",
  appId: "1:472051080589:web:cdd88e81e4697b0ca2b1c4",
  measurementId: "G-ZTKD63K2LM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
