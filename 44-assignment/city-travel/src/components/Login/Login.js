import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { userContext } from '../Layout/Layout';
import { Button } from 'react-bootstrap';
import AuthRegister from './AuthRegister';
import firebaseConfig from './firebase.config';

const Login = () => {
	// context API
	const [loggedInUser, setLoggedInUser] = useContext(userContext);

	const [user, setUser] = useState({
		isSignedIn: false,
		name: '',
		email: '',
		photo: '',
	});

	const app = initializeApp(firebaseConfig);
	console.log(app);

	const googleProvider = new GoogleAuthProvider();

	const history = useHistory();
	const location = useLocation();
	let { from } = location.state || { from: { pathname: '/' } };

	// google sign in user
	const handleGoogleSignIn = () => {
		console.log('sign in');

		// Authenticate with Firebase using the Google provider object
		const auth = getAuth();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				console.log(result);

				setLoggedInUser(result.user);
				history.replace(from);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section className="m-2 text-center">
			<section className="my-2">
				<AuthRegister user={user} setUser={setUser} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
			</section>

			<Button onClick={handleGoogleSignIn} variant="outline-info" size="lg">
				Google Sign In
			</Button>
		</section>
	);
};

export default Login;
