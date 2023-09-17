// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-pp0jtX-7ZpbC9c78X1xnaNru37N58xQ",
  authDomain: "firegallery-2791f.firebaseapp.com",
  projectId: "firegallery-2791f",
  storageBucket: "firegallery-2791f.appspot.com",
  messagingSenderId: "19592385303",
  appId: "1:19592385303:web:6918c35846949317615d52"
};



// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // initialize firestore
 const db = getFirestore(app)
 // initialize storage
 const storage = getStorage(app)

 export {db , storage}
