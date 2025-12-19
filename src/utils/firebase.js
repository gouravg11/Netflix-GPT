// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBivkPqUdksyTRSgPV1s6R6otkhULVGtW8",
  authDomain: "netflixgpt-aa02c.firebaseapp.com",
  projectId: "netflixgpt-aa02c",
  storageBucket: "netflixgpt-aa02c.firebasestorage.app",
  messagingSenderId: "783503141112",
  appId: "1:783503141112:web:b6abc16ef312387700730d",
  measurementId: "G-6PEBN3QP23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
