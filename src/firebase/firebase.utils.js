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
// const emailProvider = new firebase.auth.EmailAuthProvider();

const actionCodeSettings = {
	// URL you want to redirect back to. The domain (www.example.com) for this
	// URL must be whitelisted in the Firebase Console.
	url: "simmons-react-app.web.app",
	// This must be true.
	handleCodeInApp: true,
	iOS: {
		bundleId: "simmons-react-app.web.app",
	},
	android: {
		packageName: "simmons-react-app.web.app",
		installApp: true,
		minimumVersion: "12",
	},
	dynamicLinkDomain: "simmons-react-app.web.app",
};
export const signInWithEmail = (email) =>
	auth
		.sendSignInLinkToEmail(email, actionCodeSettings)
		.then(function () {
			// The link was successfully sent. Inform the user.
			// Save the email locally so you don't need to ask the user for it again
			// if they open the link on the same device.
			window.localStorage.setItem("emailForSignIn", email);
		})
		.catch(function (error) {
			console.log(error);
		});

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user document", error.message);
		}
	}
	return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
