//firebase connection {backend && db}
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlbjAH-H2ILe9u2MzfEQXkC1TFKRytXjU",
  authDomain: "quickbite-fce71.firebaseapp.com",
  projectId: "quickbite-fce71",
  storageBucket: "quickbite-fce71.firebasestorage.app",
  messagingSenderId: "1063155564533",
  appId: "1:1063155564533:web:cd3d466e79bc2db86baabc",
  measurementId: "G-L8VMZLF4GZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//TODO --
//firebase login -- sign in to google
//firebase init -- initialize the project
//firebase init -- to deploy
