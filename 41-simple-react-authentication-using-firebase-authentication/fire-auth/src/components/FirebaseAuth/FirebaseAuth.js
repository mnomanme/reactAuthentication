import React from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

import firebaseConfig from '../../firebase.config';

const FirebaseAuth = () => {
	const app = initializeApp(firebaseConfig);

	const provider = new GoogleAuthProvider();

	return (
		<div>
			<h2>Auth</h2>
			<button className="btn btn-outline-info btn-lg">Sign In</button>
		</div>
	);
};

export default FirebaseAuth;
