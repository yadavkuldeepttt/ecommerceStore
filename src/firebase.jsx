import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyBjrjxc8h8kfilOghHjdKHuITAdzm9EysQ",
  // authDomain: "yadavcart-c8410.firebaseapp.com",
  // projectId: "yadavcart-c8410",
  // storageBucket: "yadavcart-c8410.appspot.com",
  // messagingSenderId: "346151247541",
  // appId: "1:346151247541:web:c2b23616aadd4db1f6e8fc",
  // measurementId: "G-Y2LPE9MT7T",
  apiKey: "AIzaSyAu6gpCyabdClFd4FilbD5hkpFKuQHzS1o",
  authDomain: "ecommerce-a9a47.firebaseapp.com",
  projectId: "ecommerce-a9a47",
  storageBucket: "ecommerce-a9a47.appspot.com",
  messagingSenderId: "873379430978",
  appId: "1:873379430978:web:fe860c94b2edd4520a23db",
  measurementId: "G-V3WJ9VT5QN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage, provider };
