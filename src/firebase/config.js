import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


 
 const firebaseConfig = {
    apiKey: "AIzaSyBaZ3U4qMEFaX6Pt8wd2aNmHu0NxRWN-Fg",
    authDomain: "travelgram-5d27f.firebaseapp.com",
    projectId: "travelgram-5d27f",
    storageBucket: "travelgram-5d27f.appspot.com",
    messagingSenderId: "1014241648797",
    appId: "1:1014241648797:web:4ee2f969c259a2b470f474"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const db = getFirestore(app);

export { projectStorage, db };