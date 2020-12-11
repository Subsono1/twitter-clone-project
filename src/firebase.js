import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqIvOOgvC8OJDB9nOteJuU3sPdm8D8r6g",
  authDomain: "twitter-clone-1bb27.firebaseapp.com",
  databaseURL: "https://twitter-clone-1bb27.firebaseio.com",
  projectId: "twitter-clone-1bb27",
  storageBucket: "twitter-clone-1bb27.appspot.com",
  messagingSenderId: "744806585351",
  appId: "1:744806585351:web:23ed9971d6dd6ab16186a2",
  measurementId: "G-4ZVC5R7SHB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db