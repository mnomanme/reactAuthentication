import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import firebaseConfig from './firebase.config';

const Auth = () => {
	const app = initializeApp(firebaseConfig);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	console.log('app', app, 'googleProvider', googleProvider, 'githubProvider', githubProvider);

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

	const handleGitHubSignIn = () => {
		console.log('github sign in');
		const auth = getAuth();
		signInWithPopup(auth, githubProvider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				setUser(user);
				console.log('credential', credential);
				console.log('token', token);
				console.log('github user', user);
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
				console.log(error);
			});
	};

	return (
		<>
			<Button onClick={handleGoogleSignIn} variant="success">
				Google Sign In
			</Button>
			<br />
			<Button onClick={handleGitHubSignIn} variant="info" className="my-2">
				Github Sign In
			</Button>
			<h4>Email: {user.email}</h4>
			<img src={user.photoURL} alt="" />
		</>
	);
};

export default Auth;
