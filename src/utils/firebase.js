// Import the functions you need from the SDKs you need\
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCapnp1P4uzxZLP7wiysGa8SpW0YAbp4oQ",
    authDomain: "gptnetflix-4cf87.firebaseapp.com",
    projectId: "gptnetflix-4cf87",
    storageBucket: "gptnetflix-4cf87.appspot.com",
    messagingSenderId: "865214952734",
    appId: "1:865214952734:web:83abd58245cc9e28ba450f",
    measurementId: "G-DHQ46TBJDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
