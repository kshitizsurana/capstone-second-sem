import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGHgTy-YV085hQOu98lNtKAhrg8wgJfEI",
  authDomain: "capstone-project-f59b6.firebaseapp.com",
  projectId: "capstone-project-f59b6",
  storageBucket: "capstone-project-f59b6.appspot.com",
  messagingSenderId: "417699170521",
  appId: "1:417699170521:web:705b40d0023b6c944856c8",
  measurementId: "G-8QFP3DK0R1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
