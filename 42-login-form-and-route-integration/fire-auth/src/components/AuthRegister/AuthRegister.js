import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthRegister = (props) => {
	// console.log(props);
	// console.log(props.user);

	const [newUser, setNewUser] = useState(false);

	const user = props.user;
	const setUser = props.setUser;

	const handleSubmit = (e) => {
		// console.log('submit');
		// console.log('form submit', user.email, user.password);

		if (newUser && user.email && user.password) {
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, user.email, user.password)
				.then((res) => {
					const newUserInfo = { ...user };
					newUserInfo.error = '';
					newUserInfo.success = true;
					setUser(newUserInfo);
				})
				.catch((error) => {
					const newUserInfo = { ...user };
					newUserInfo.error = error.message;
					newUserInfo.success = false;
					setUser(newUserInfo);
				});
		}
		if (!newUser && user.email && user.password) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, user.email, user.password)
				.then((res) => {
					const newUserInfo = { ...user };
					newUserInfo.error = '';
					newUserInfo.success = true;
					setUser(newUserInfo);
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
			// const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value);
			// console.log(isEmailValid);
			isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
		}
		if (event.target.name === 'password') {
			const isPasswordValid = event.target.value.length > 6;
			// console.log(isPasswordValid);
			const passHasNumber = /\d{1}/.test(event.target.value);
			// console.log(isPasswordValid && passHasNumber);
			isFieldValid = isPasswordValid && passHasNumber;
		}
		if (isFieldValid) {
			const newUserInfo = { ...user };
			// console.log(newUserInfo);
			newUserInfo[event.target.name] = event.target.value;
			setUser(newUserInfo);
		}
	};

	return (
		<section>
			<h2>Our Own Authentication</h2>

			<p>Name: {user.name}</p>
			<p>Email: {user.email}</p>
			<p>Password: {user.password}</p>
			<br />
			<input onChange={() => setNewUser(!newUser)} type="checkbox" name="newUser" id="" />
			<label htmlFor="newUser">New User Sign Up</label>

			<form onSubmit={handleSubmit}>
				{newUser && <input onBlur={handleBlur} type="text" name="name" id="" placeholder="your name" className="form-control mx-auto w-25" />}
				<br />
				<input onBlur={handleBlur} type="text" name="email" id="" placeholder="your email" className="form-control mx-auto w-25" required />
				<br />
				<input onBlur={handleBlur} type="password" name="password" id="" placeholder="your password" className="form-control mx-auto w-25" required />
				<br />
				<input className="btn btn-info" type="submit" value="Submit" />
			</form>
			<br />
			<p className="text-danger">{user.error}</p>
			{user.success && <p className="text-success">User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
		</section>
	);
};

export default AuthRegister;
