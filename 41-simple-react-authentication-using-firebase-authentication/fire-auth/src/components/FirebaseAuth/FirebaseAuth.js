import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import firebaseConfig from '../../firebase.config';

const FirebaseAuth = () => {
	const app = initializeApp(firebaseConfig);
	console.log(app);

	const provider = new GoogleAuthProvider();

	const [user, setUser] = useState({
		isSignedIn: false,
		name: '',
		email: '',
		photoURL: '',
	});

	const handleSignIn = () => {
		console.log('sign in');

		// Authenticate with Firebase using the Google provider object
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
				const { displayName, email, photoURL } = result.user;
				console.log(displayName, email, photoURL);

				const signedInUser = {
					isSignedIn: true,
					name: displayName,
					email: email,
					photoURL: photoURL,
				};
				setUser(signedInUser);

				const credential = GoogleAuthProvider.credentialFromResult(result);
				console.log(credential);
				const token = credential.accessToken;
				console.log(token);
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error);

				const errorCode = error.code;
				console.log(errorCode);
				const errorMessage = error.message;
				console.log(errorMessage);
				const email = error.email;
				console.log(email);
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(credential);
			});
	};

	const handleSignOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				const signedOutUser = {
					isSignedIn: false,
					name: '',
					email: '',
					photoURL: '',
				};
				setUser(signedOutUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="m-5">
			{user.isSignedIn ? (
				<button onClick={handleSignOut} className="btn btn-outline-info btn-lg">
					Sign Out
				</button>
			) : (
				<button onClick={handleSignIn} className="btn btn-outline-info btn-lg">
					Sign In
				</button>
			)}
			{user.isSignedIn ? (
				<section>
					<h2>Welcome, {user.name}</h2>
					<p>Your email: {user.email}</p>
					<img className="w-25" src={user.photoURL} alt="userPhoto" />
				</section>
			) : (
				false
			)}
		</div>
	);
};

export default FirebaseAuth;
