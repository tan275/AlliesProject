import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBMx-8TbdHPafSmN-CG2hnwv9RTuWvys78",
    authDomain: "allies-162e9.firebaseapp.com",
    projectId: "allies-162e9",
    storageBucket: "allies-162e9.appspot.com",
    messagingSenderId: "449588580382",
    appId: "1:449588580382:web:faef4cf29acaf120825e0f"
  };

// init firebase
initializeApp(firebaseConfig)

// init & export firestore service
export const db = getFirestore()
// generate & export auth object
export const auth = getAuth()