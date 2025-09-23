// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvCUzzGb47s6X2Kat_5Nk0_92vMUtAdVM",
  authDomain: "laederdata-frontend.firebaseapp.com",
  projectId: "laederdata-frontend",
  storageBucket: "laederdata-frontend.appspot.com",
  messagingSenderId: "552173295724",
  appId: "1:552173295724:web:dd1b86b8dc6cc2b025a049",
  measurementId: "G-86X2KL1MKM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
