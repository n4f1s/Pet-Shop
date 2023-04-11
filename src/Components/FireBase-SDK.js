import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAt3Xp1vWylkpLUZ3RUtodKjGsDPtZfiU",
  authDomain: "pet-shop-e81bd.firebaseapp.com",
  projectId: "pet-shop-e81bd",
  storageBucket: "pet-shop-e81bd.appspot.com",
  messagingSenderId: "1097782397241",
  appId: "1:1097782397241:web:626aa2e3b0339787be80e8",
  measurementId: "G-ECS23TNTHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);