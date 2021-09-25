import React from 'react';

const AuthRegister = (props) => {
	// console.log(props);
	// console.log(props.user);

	const user = props.user;
	const setUser = props.setUser;

	const handleSubmit = () => {
		console.log('submit');
	};

	const handleBlur = (event) => {
		console.log(event.target.value);
		let isFormValid = true;

		if (event.target.name === 'email') {
			// const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value);
			// console.log(isEmailValid);
			isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
		}
		if (event.target.name === 'password') {
			const isPasswordValid = event.target.value.length > 6;
			// console.log(isPasswordValid);
			const passHasNumber = /\d{1}/.test(event.target.value);
			// console.log(isPasswordValid && passHasNumber);
			isFormValid = isPasswordValid && passHasNumber;
		}
		if (isFormValid) {
			const newUserInfo = { ...user };
			console.log(newUserInfo);
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
			<form onSubmit={handleSubmit}>
				<input onBlur={handleBlur} type="text" name="name" id="" placeholder="your name" />
				<br />
				<input onBlur={handleBlur} type="text" name="email" id="" placeholder="your email" required />
				<br />
				<input onBlur={handleBlur} type="password" name="password" id="" placeholder="your password" required />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</section>
	);
};

export default AuthRegister;
