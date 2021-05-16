import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMZeprRHIdLZXbNOa8COMmfs3ubbGMNTc",
  authDomain: "challenge-c76cd.firebaseapp.com",
  projectId: "challenge-c76cd",
  storageBucket: "challenge-c76cd.appspot.com",
  messagingSenderId: "953652029428",
  appId: "1:953652029428:web:addad89ddcc8e998d4bba1",
  measurementId: "G-YQET52W4ME"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };