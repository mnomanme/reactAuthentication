import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import firebaseConfig from './firebase.config';

const Auth = () => {
	const app = initializeApp(firebaseConfig);
	const googleProvider = new GoogleAuthProvider();
	console.log('app', app, 'googleProvider', googleProvider);

	const [user, setUser] = useState({});

	const handleGoogleSignIn = () => {
		console.log('google sign in done');

		const auth = getAuth();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				setUser(user);
				console.log('credential', credential);
				console.log('token', token);
				console.log('user', user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log('errorCode', errorCode);
				console.log('errorMessage', errorMessage);
				console.log('error email', email);
				console.log('error credential', credential);
			});
	};
	return (
		<>
			<Button onClick={handleGoogleSignIn} variant="success">
				Google Sign In
			</Button>
			<h4>Email: {user.email}</h4>
			<img src={user.photoURL} alt="" />
		</>
	);
};

export default Auth;
