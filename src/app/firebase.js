// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYrep3Y0s6gQVMHHTD0Nd2Z_3yt7IzO1Y",
    authDomain: "fir-aut-app.firebaseapp.com",
    projectId: "fir-aut-app",
    storageBucket: "fir-aut-app.appspot.com",
    messagingSenderId: "1026352410315",
    appId: "1:1026352410315:web:be37c2c5755c29c960f54e",
    measurementId: "G-S218B2DP0G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
