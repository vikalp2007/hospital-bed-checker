// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLRNlDXKxESnIHj4kKhOqz2F9y-G30ps",
  authDomain: "hospital-beds-checker.firebaseapp.com",
  projectId: "hospital-beds-checker",
  storageBucket: "hospital-beds-checker.appspot.com",
  messagingSenderId: "118575959390",
  appId: "1:118575959390:web:8df05c28ee46079a7193cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export firestore
export const database = getFirestore();