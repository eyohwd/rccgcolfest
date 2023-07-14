
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "rccgcityofligh.firebaseapp.com",
  projectId: "rccgcityofligh",
  storageBucket: "rccgcityofligh.appspot.com",
  messagingSenderId: "875108000431",
  appId: "1:875108000431:web:7349810167985860f1ea5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);