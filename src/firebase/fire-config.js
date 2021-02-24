import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDKR2C-FjEAHbDYR3vlRW-M1hQff1o7Pv0",
    authDomain: "journalapp-84d90.firebaseapp.com",
    projectId: "journalapp-84d90",
    storageBucket: "journalapp-84d90.appspot.com",
    messagingSenderId: "533681209747",
    appId: "1:533681209747:web:94b5373862f0a119b96866"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db, 
      googleAuthProvider,
      firebase
  }