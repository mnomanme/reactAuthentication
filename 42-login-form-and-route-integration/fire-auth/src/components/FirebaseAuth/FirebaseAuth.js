import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import AuthRegister from '../AuthRegister/AuthRegister';

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

	// google sign in user
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
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// google sign out user
	const handleSignOut = () => {
		console.log('sign out');
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				const signedOutUser = {
					isSignedIn: false,
					name: '',
					email: '',
					photoURL: '',
					error: '',
					success: false,
				};
				setUser(signedOutUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="m-2">
			{user.isSignedIn ? (
				<button onClick={handleSignOut} className="btn btn-outline-info btn-lg">
					Sign Out
				</button>
			) : (
				<button onClick={handleSignIn} className="btn btn-outline-info btn-lg">
					Sign In
				</button>
			)}
			<br />
			{user.isSignedIn ? (
				<section>
					<h2>Welcome, {user.name}</h2>
					<p>Your email: {user.email}</p>
					<img className="w-25" src={user.photoURL} alt="userPhoto" />
				</section>
			) : (
				false
			)}
			<br />
			<section className="my-2">
				<AuthRegister user={user} setUser={setUser} />
			</section>
		</div>
	);
};

export default FirebaseAuth;
