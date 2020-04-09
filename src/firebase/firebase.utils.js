import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD5ClHi0RIiDjzaDSJFF23AjWTOtSNjTCc",
	authDomain: "simmons-react-app.firebaseapp.com",
	databaseURL: "https://simmons-react-app.firebaseio.com",
	projectId: "simmons-react-app",
	storageBucket: "simmons-react-app.appspot.com",
	messagingSenderId: "570063459674",
	appId: "1:570063459674:web:80c1c12a894841fd854f63",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
