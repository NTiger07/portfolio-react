// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNJ9KalJSDyOtDFTzAM7-levU9-chsIvU",
    authDomain: "my-portfolio-8cfb5.firebaseapp.com",
    projectId: "my-portfolio-8cfb5",
    storageBucket: "my-portfolio-8cfb5.appspot.com",
    messagingSenderId: "929244089075",
    appId: "1:929244089075:web:dd4de2946fff3039bb8586",
    measurementId: "G-TFH2JVWZ33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);