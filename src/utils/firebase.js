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
    apiKey: "AIzaSyDoGDVefMYzhYNZq5wb9b_S8BertArGkX8",
    authDomain: "netflixgpt-e8ef0.firebaseapp.com",
    projectId: "netflixgpt-e8ef0",
    storageBucket: "netflixgpt-e8ef0.appspot.com",
    messagingSenderId: "1022616814362",
    appId: "1:1022616814362:web:43c1993dd3c18e587a62a3",
    measurementId: "G-28V4E2658M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
