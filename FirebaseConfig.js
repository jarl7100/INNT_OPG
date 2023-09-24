// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTAO786R_HoShujMB1y88Va5wJkfAFZ6I",
  authDomain: "innt-opg.firebaseapp.com",
  projectId: "innt-opg",
  storageBucket: "innt-opg.appspot.com",
  messagingSenderId: "136032493414",
  appId: "1:136032493414:web:3c40eb4948534c195332a7",
  measurementId: "G-V6RMZ49NSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

