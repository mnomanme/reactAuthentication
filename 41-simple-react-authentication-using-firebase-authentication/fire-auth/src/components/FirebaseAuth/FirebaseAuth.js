import React from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import firebaseConfig from '../../firebase.config';

const FirebaseAuth = () => {
	const app = initializeApp(firebaseConfig);

	const provider = new GoogleAuthProvider();

	const handleSignIn = () => {
		console.log('sign in');

		// Authenticate with Firebase using the Google provider object
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
				const { displayName, email, photoURL } = result.user;
				console.log(displayName, email, photoURL);
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	return (
		<div>
			<h2>Auth</h2>
			<button onClick={handleSignIn} className="btn btn-outline-info btn-lg">
				Sign In
			</button>
		</div>
	);
};

export default FirebaseAuth;
