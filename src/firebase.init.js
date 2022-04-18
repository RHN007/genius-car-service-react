// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "genious-car-services-56579.firebaseapp.com",
  apiKey: "AIzaSyCwQiSWmnS8HyeAUd8D9jbKRf2vvRBEDZs",
  projectId: "genious-car-services-56579",
  storageBucket: "genious-car-services-56579.appspot.com",
  messagingSenderId: "187088608738",
  appId: "1:187088608738:web:db4a159eabc59e8b4d6dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth