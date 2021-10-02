import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import firebaseConfig from './firebase.config';
import { LoginContext } from '../../App';

const Login = () => {
	const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
	const app = initializeApp(firebaseConfig);

	const handleGoogleSignIn = () => {
		console.log('sign in google');

		const googleProvider = new GoogleAuthProvider();

		const auth = getAuth();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const { displayName, email } = result.user;
				const signInUser = { name: displayName, email: email };
				setLoggedInUser(signInUser);
				console.log(signInUser);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<Container className="text-center my-3">
			<Button onClick={handleGoogleSignIn} variant="outline-secondary">
				Google Sign In
			</Button>
		</Container>
	);
};

export default Login;
