import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDJSi_JbRPQ7BklTRMK9QKIPSNETmhwymQ',
  authDomain: 'whatsapp-next-2021.firebaseapp.com',
  projectId: 'whatsapp-next-2021',
  storageBucket: 'whatsapp-next-2021.appspot.com',
  messagingSenderId: '681084673979',
  appId: '1:681084673979:web:bac748e85bb1021ea96e9e',
  measurementId: 'G-0E4J6Z05CL'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
