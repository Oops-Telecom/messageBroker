import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFnS8L1WQ2nJy-x4ab37ol_kW5kJ-ig0o",
  authDomain: "letmeask-c3277.firebaseapp.com",
  databaseURL: "https://letmeask-c3277-default-rtdb.firebaseio.com",
  projectId: "letmeask-c3277",
  storageBucket: "letmeask-c3277.appspot.com",
  messagingSenderId: "362487346334",
  appId: "1:362487346334:web:fc6be7406cef2f3497378f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
