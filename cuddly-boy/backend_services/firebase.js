import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAzBCkPEzzPnYecMn4vZ_6xbElKlucfeqQ",
  authDomain: "hokkienph.firebaseapp.com",
  projectId: "hokkienph",
  storageBucket: "hokkienph.appspot.com",
  messagingSenderId: "692570251019",
  appId: "1:692570251019:web:9eac6c008263be367e8c0e",
  measurementId: "G-LG23G7493Y"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const creds = app.auth()
const store = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export {creds, provider, store}