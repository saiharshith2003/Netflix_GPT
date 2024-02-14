// Import the functions you need from the SDKs you need\
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnWZxq6YKyZfafvxAADF__RtDfUST-G7U",
    authDomain: "netflixgpt-c7a0a.firebaseapp.com",
    projectId: "netflixgpt-c7a0a",
    storageBucket: "netflixgpt-c7a0a.appspot.com",
    messagingSenderId: "613901213845",
    appId: "1:613901213845:web:d7b003e4874ac11c42fb9c",
    measurementId: "G-E5YQ2WDPX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
