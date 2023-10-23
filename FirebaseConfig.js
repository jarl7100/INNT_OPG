// importere filer til firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Her er vores firebase config
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

