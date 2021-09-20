//to use firebase app
// import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9

//to use auth
// import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9

//to use firestore
// import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
    apiKey: "AIzaSyAsEfUsqzVsZeb4CuH07fc4W9qODK2iBZk",
    authDomain: "linked-in-clone-18a56.firebaseapp.com",
    projectId: "linked-in-clone-18a56",
    storageBucket: "linked-in-clone-18a56.appspot.com",
    messagingSenderId: "387983784206",
    appId: "1:387983784206:web:1ee19e29c9b3545a0cff5f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth=firebaseApp.auth();
const db = firebaseApp.firestore()

// const auth = app.auth()
// const db=firebase.firestore()
export {db, auth}

