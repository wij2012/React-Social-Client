import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth"


const app = firebase.initializeApp( {
	apiKey: "AIzaSyC-14-kLV-wHsqiuEPOSlxaDk_zjdI0QSY",
	authDomain: "react-social-client.firebaseapp.com",
	projectId: "react-social-client",
	storageBucket: "react-social-client.appspot.com",
	messagingSenderId: "725630122288",
	appId: "1:725630122288:web:523cd66b0d45084feff0f5",

} )
  

export const auth = getAuth( app );

export default app;