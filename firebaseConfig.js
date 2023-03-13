// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByX9P-0dMdfrIzOQDL9MAl5K0AZ5PTRKA",
  authDomain: "zomato-13fb4.firebaseapp.com",
  projectId: "zomato-13fb4",
  storageBucket: "zomato-13fb4.appspot.com",
  messagingSenderId: "857578361195",
  appId: "1:857578361195:web:eac883cb11e9392a59bc2e",
  measurementId: "G-LJX71VSWLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
