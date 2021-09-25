import React from 'react';

const AuthRegister = () => {
	const handleSubmit = () => {
		console.log('submit');
	};

	const handleBlur = (event) => {
		console.log(event.target.value);
	};

	return (
		<section>
			<h2>Our Own Authentication</h2>
			<form onSubmit={handleSubmit}>
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
