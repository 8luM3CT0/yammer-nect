import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAqdQJ9_3lzEBvPOMsoyQAwgykEDiAkQDg',
  authDomain: 'blume-nextjs.firebaseapp.com',
  projectId: 'blume-nextjs',
  storageBucket: 'blume-nextjs.appspot.com',
  messagingSenderId: '663844254208',
  appId: '1:663844254208:web:0ac66c9555f1daf96e5ee5',
  measurementId: 'G-TCQZLZ50W5'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const creds = app.auth()
const store = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = app.storage()

export { creds, store, provider, storage }
