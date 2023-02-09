// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAir4wXqMIVuiCxXzeVFI1_AifSxMjzpBo",
  authDomain: "chatgpt-8ff85.firebaseapp.com",
  projectId: "chatgpt-8ff85",
  storageBucket: "chatgpt-8ff85.appspot.com",
  messagingSenderId: "104514471050",
  appId: "1:104514471050:web:afcb423c3fad5b6e3c9973",
  measurementId: "G-MN30X8SQKT",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
