import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAXlIeWb5T_X3uHtyHNW94dQsMCPAD6RcA",
  authDomain: "allies-project-aadaf.firebaseapp.com",
  projectId: "allies-project-aadaf",
  storageBucket: "allies-project-aadaf.appspot.com",
  messagingSenderId: "602105574039",
  appId: "1:602105574039:web:ffa5c523078703b9f46fd2"
};

// init firebase
initializeApp(firebaseConfig)

// init & export firestore service
export const db = getFirestore()
// generate & export auth object
export const auth = getAuth()

