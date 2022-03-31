import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth"

const app = firebase.initializeApp( {
	apiKey: "AIzaSyBReZ6rIEQJPYModM-eLP0R8kMynXzzEoI",
	authDomain: "react-social-client-12420.firebaseapp.com",
	projectId: "react-social-client-12420",
	storageBucket: "react-social-client-12420.appspot.com",
	messagingSenderId: "75724424160",
	appId: "1:75724424160:web:c2df380c469cc44267e185"
} )


export const auth = getAuth( app );

export default app;
