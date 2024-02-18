// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa-gc3VqqzxGkFdizKxh84vF-0zPRTrGQ",
  authDomain: "practicas-unison.firebaseapp.com",
  projectId: "practicas-unison",
  storageBucket: "practicas-unison.appspot.com",
  messagingSenderId: "353731455312",
  appId: "1:353731455312:web:85596ce59dc5019ddb6455",
  measurementId: "G-K8ZBV0TBZ7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase