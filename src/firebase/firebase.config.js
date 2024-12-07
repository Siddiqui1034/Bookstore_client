// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8zwAEgvET6EtOsc43dU9yvF0AjhQCLlM",
  authDomain: "bookstore-b6ac4.firebaseapp.com",
  projectId: "bookstore-b6ac4",
  storageBucket: "bookstore-b6ac4.firebasestorage.app",
  messagingSenderId: "593720994807",
  appId: "1:593720994807:web:3aaa1287261e6fea9ddcf2",
  databaseURL: "https://bookstore-b6ac4-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export {app};