import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import firebaseConfig from './firebase.config';

export const app = () => {
	initializeApp(firebaseConfig);
	console.log(app);
};

export const handleGoogleSignIn = () => {
	console.log('sign in');
	const googleProvider = new GoogleAuthProvider();
	// Authenticate with Firebase using the Google provider object
	const auth = getAuth();
	return signInWithPopup(auth, googleProvider)
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
			return signedInUser;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const handleGoogleSignOut = () => {
	console.log('sign out');
	const auth = getAuth();
	return signOut(auth)
		.then(() => {
			const signedOutUser = {
				isSignedIn: false,
				name: '',
				email: '',
				photoURL: '',
				error: '',
				success: false,
			};
			return signedOutUser;
		})
		.catch((error) => {
			console.log(error);
		});
};

// export const createUser = () => {
// 	const auth = getAuth();
// 	createUserWithEmailAndPassword(auth, user.email, user.password)
// 		.then((res) => {
// 			const newUserInfo = { ...user };
// 			newUserInfo.error = '';
// 			newUserInfo.success = true;
// 			setUser(newUserInfo);
// 			updateUserName(user.name);
// 		})
// 		.catch((error) => {
// 			const newUserInfo = { ...user };
// 			newUserInfo.error = error.message;
// 			newUserInfo.success = false;
// 			setUser(newUserInfo);
// 		});
// };

// export const signInUser = () => {
// 	const auth = getAuth();
// 	signInWithEmailAndPassword(auth, user.email, user.password)
// 		.then((res) => {
// 			const newUserInfo = { ...user };
// 			newUserInfo.error = '';
// 			newUserInfo.success = true;
// 			setUser(newUserInfo);
// 			setLoggedInUser(newUserInfo);
// 			history.replace(from);
// 			console.log('sign in user info', res.user);
// 		})
// 		.catch((error) => {
// 			const newUserInfo = { ...user };
// 			newUserInfo.error = error.message;
// 			newUserInfo.success = false;
// 			setUser(newUserInfo);
// 		});
// };

// const updateUserName = (name) => {
// 	const auth = getAuth();
// 	updateProfile(auth.currentUser, {
// 		displayName: name,
// 	})
// 		.then(() => {
// 			console.log('user name updated successfully');
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };
