// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx3BQj34rlaUo8_2VGqkg3-Wx98GhDw6w",
  authDomain: "netflixgpt-d1183.firebaseapp.com",
  projectId: "netflixgpt-d1183",
  storageBucket: "netflixgpt-d1183.appspot.com",
  messagingSenderId: "1071415923646",
  appId: "1:1071415923646:web:38cdae8799b74d4b2adfef",
  measurementId: "G-EDH2CGYVZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();