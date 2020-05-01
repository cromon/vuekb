import firebase from '@firebase/app'
import '@firebase/firestore'
import config from '../kb.config.js'

const firebaseConfig = {
  // apiKey: '',
  // authDomain: '',
  // databaseURL: '',
  projectId: config.firebase ? config.firebase.projectId : '',
  // storageBucket: '',
  // messagingSenderId: '',
  // appId: ''
}

// Get a Firestore instance
let db
if (config.datastore === 'firebase') {
  db = !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app().firestore()
}

export default db
