// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHu-ahTwhRb90IzhzBGJOIrSYjTp2LiaE",
  authDomain: "netflix-clone-8355c.firebaseapp.com",
  projectId: "netflix-clone-8355c",
  storageBucket: "netflix-clone-8355c.appspot.com",
  messagingSenderId: "402579937724",
  appId: "1:402579937724:web:397e7fbab02d8f675c73b9"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig):getApp();
const db =getFirestore()
const auth=getAuth()

export default app
export {auth, db}



