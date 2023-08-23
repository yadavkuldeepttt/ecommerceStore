import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjrjxc8h8kfilOghHjdKHuITAdzm9EysQ",
  authDomain: "yadavcart-c8410.firebaseapp.com",
  projectId: "yadavcart-c8410",
  storageBucket: "yadavcart-c8410.appspot.com",
  messagingSenderId: "346151247541",
  appId: "1:346151247541:web:c2b23616aadd4db1f6e8fc",
  measurementId: "G-Y2LPE9MT7T",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage, provider };
