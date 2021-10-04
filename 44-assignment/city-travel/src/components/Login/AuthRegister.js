import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const AuthRegister = (props) => {
	const [newUser, setNewUser] = useState(false);

	const user = props.user;
	const setUser = props.setUser;

	// const loggedInUser = props.loggedInUser;
	const setLoggedInUser = props.setLoggedInUser;

	const history = useHistory();
	const location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };

	const handleFormSubmit = (e) => {
		// console.log('submit');
		// console.log('form submit', user.email, user.password);

		if (newUser && user.email && user.password && user.confirmPassword && user.name) {
			const auth = getAuth();
			if (user.password === user.confirmPassword && auth) {
				createUserWithEmailAndPassword(auth, user.email, user.password)
					.then((res) => {
						updateProfile(auth.currentUser, {
							displayName: user.name,
						}).then(() => {
							setLoggedInUser(res.user);
							history.replace(from);
						});
					})
					.catch((error) => {
						const newUserInfo = { ...user };
						newUserInfo.error = error.message;
						newUserInfo.success = false;
						setUser(newUserInfo);
					});
			}
		}

		if (!newUser && user.email && user.password) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, user.email, user.password)
				.then((res) => {
					setLoggedInUser(res.user);
					history.replace(from);
				})
				.catch((error) => {
					const newUserInfo = { ...user };
					newUserInfo.error = error.message;
					newUserInfo.success = false;
					setUser(newUserInfo);
				});
		}
		e.preventDefault();
	};

	const handleBlur = (event) => {
		// console.log(event.target.value);
		let isFieldValid = true;

		if (event.target.name === 'email') {
			isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
		}
		if (event.target.name === 'password') {
			const isPasswordValid = event.target.value.length > 6;
			const passHasNumber = /\d{1}/.test(event.target.value);
			isFieldValid = isPasswordValid && passHasNumber;
		}
		if (isFieldValid) {
			const newUserInfo = { ...user };
			newUserInfo[event.target.name] = event.target.value;
			setUser(newUserInfo);
		}
	};

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				{newUser ? (
					<div className="form-control mx-auto w-75">
						<h5 className="mb-4 text-center">Create an account</h5>
						<input required type="text" name="name" onBlur={handleBlur} placeholder="Name" className="form-control mx-auto w-50" />
						<br />
						<input required type="email" name="email" onBlur={handleBlur} placeholder="Email" className="form-control mx-auto w-50" />
						<br />
						<input required type="password" name="password" onBlur={handleBlur} placeholder="Password" className="form-control mx-auto w-50" />
						<br />
						<input required type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Password" className="form-control mx-auto w-50" />
						<br />
						<input type="submit" className="btn btn-danger mt-3 fs-5" value="Create an account" />
						<p className="mt-3">
							already have an account
							<span className="text-primary m-1" onClick={() => setNewUser(false)}>
								Sign in
							</span>
						</p>
					</div>
				) : (
					<div className="form-control mx-auto w-75">
						<h5 className="mb-4 text-center">Login</h5>
						<input required type="email" name="email" onBlur={handleBlur} placeholder="Email" className="form-control mx-auto w-50" />
						<br />
						<input required type="password" name="password" onBlur={handleBlur} placeholder="Password" className="form-control mx-auto w-50" />
						<input type="submit" className="btn btn-danger mt-3 fs-5" value="Login" />
						<p className="mt-3">
							Don't have an account
							<span className="text-primary m-1" onClick={() => setNewUser(true)}>
								Sign up
							</span>
						</p>
					</div>
				)}
			</form>
			<div className="Horizontal d-flex justify-content-center mt-3">
				<hr /> <h6 className="mx-3"> or </h6> <hr />
			</div>
		</>
	);
};

export default AuthRegister;
