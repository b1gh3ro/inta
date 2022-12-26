// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "Apikey",
    authDomain: "domain",
    databaseURL: "database",
    projectId: "your id",
    storageBucket: "storage bucket",
    messagingSenderId: "412453603464",
    appId: "id",
    measurementId: "id"
  })
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };