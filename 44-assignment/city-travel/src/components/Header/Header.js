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
		<Container>
			<Navbar bg="info" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link to="/" className="Link">
							<h3>City Ride</h3>
						</Link>
					</Navbar.Brand>
					<Nav className="ml-auto">
						<Nav.Link>
							<Link to="/" className="Link">
								Home
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/destination" className="Link">
								Destination
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/blog" className="Link">
								Blog
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/contact" className="Link">
								Contact
							</Link>
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
