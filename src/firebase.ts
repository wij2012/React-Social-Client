import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth"

const app = firebase.initializeApp( {
	apiKey: "AIzaSyBeCLEbyjUgbFk6ZQfjha63w-QOLGIW5yk",
  authDomain: "reverb-acb4b.firebaseapp.com",
  projectId: "reverb-acb4b",
  storageBucket: "reverb-acb4b.appspot.com",
  messagingSenderId: "991014952308",
  appId: "1:991014952308:web:efa49d8a5d53d23d152021"
} )


export const auth = getAuth( app );

export default app;
