import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARgT6BXhG1X7uGGO-ZPZ28Mx588gbc1Xw",
    authDomain: "tiktok-ad7c8.firebaseapp.com",
    databaseURL: "https://tiktok-ad7c8.firebaseio.com",
    projectId: "tiktok-ad7c8",
    storageBucket: "tiktok-ad7c8.appspot.com",
    messagingSenderId: "130238306884",
    appId: "1:130238306884:web:48dc92bf0e0520e9c6ba11",
    measurementId: "G-W5TBN0MV6F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;