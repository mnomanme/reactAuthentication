import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import firebaseConfig from './firebase.config';

const Login = () => {
	const handleGoogleSignIn = () => {
		console.log('sign in google');

		const app = initializeApp(firebaseConfig);
		const googleProvider = new GoogleAuthProvider();

		const auth = getAuth();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};

	return (
		<Container className="text-center">
			<h1>This is Login</h1>
			<Button onClick={handleGoogleSignIn} variant="outline-secondary">
				Google Sign In
			</Button>
		</Container>
	);
};

export default Login;
