// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDVoOPcGy0P6vU9l--UCpIOrCPVUnD1pSc",
    authDomain: "chat-app-react-8b394.firebaseapp.com",
    projectId: "chat-app-react-8b394",
    storageBucket: "chat-app-react-8b394.appspot.com",
    messagingSenderId: "918201514897",
    appId: "1:918201514897:web:548b64688d3d356da23830",
    measurementId: "G-5EW45W20S6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;