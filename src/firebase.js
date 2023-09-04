import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIHhCEhxHqOYCPOg9KVEbS4LtFuALs80c",
  authDomain: "realtime-chat-4ca5e.firebaseapp.com",
  projectId: "realtime-chat-4ca5e",
  storageBucket: "realtime-chat-4ca5e.appspot.com",
  messagingSenderId: "114256027694",
  appId: "1:114256027694:web:ad62b3fe30775d9eca3fbf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
