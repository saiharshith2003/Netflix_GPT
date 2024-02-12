// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmnlQGu_XxIuZUoc8-Vjb02fT-qxsnTOo",
    authDomain: "netflixgpt-8031e.firebaseapp.com",
    projectId: "netflixgpt-8031e",
    storageBucket: "netflixgpt-8031e.appspot.com",
    messagingSenderId: "810646311897",
    appId: "1:810646311897:web:d3517afbca37bc5846ffc8",
    measurementId: "G-58597RB58S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
