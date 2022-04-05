import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth"

const app = firebase.initializeApp( {
	apiKey: "AIzaSyDptwG60dDI3w_8QUNMBiW-lhBqmxzMKn0",
  	authDomain: "reverb-eafa2.firebaseapp.com",
  	projectId: "reverb-eafa2",
  	storageBucket: "reverb-eafa2.appspot.com",
  	messagingSenderId: "479434688405",
  	appId: "1:479434688405:web:6aa14660f44719244e989c"
} )


export const auth = getAuth( app );

export default app;
