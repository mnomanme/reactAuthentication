import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from '@firebase/auth';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { userContext } from '../Layout/Layout';
import './Header.css';

const Header = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);

	const handleLogOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				const signOutUser = {
					isSignedIn: false,
					name: '',
					email: '',
					photo: '',
					error: '',
					success: false,
				};
				setLoggedInUser(signOutUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container className="">
			<Navbar bg="info" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link to="/">
							<h3>City Ride</h3>
						</Link>
					</Navbar.Brand>
					<Nav className="ml-auto">
						<Nav.Link>
							<Link to="/">Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/destination">Destination</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/blog">Blog</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/contact">Contact</Link>
						</Nav.Link>

						{loggedInUser.displayName ? (
							<div>
								<span className="fw-bold me-3 fs-5">{loggedInUser.displayName}</span>
								<Button onClick={handleLogOut} variant="danger">
									LogOut
								</Button>
							</div>
						) : (
							<Link className="link" to="/login">
								<Button variant="success">Login</Button>
							</Link>
						)}
					</Nav>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;
