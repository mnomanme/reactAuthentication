import React, { useContext } from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../Layout/Layout';
import './Header.css';

const Header = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);

	return (
		<Container className="header">
			<nav>
				<Link to="/home">Home</Link>
				<Link to="/destination">Destination</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/contact">Contact</Link>
				{loggedInUser?.email ? (
					<Button onClick={() => setLoggedInUser()} variant="outline-danger " size="lg">
						Log Out
					</Button>
				) : (
					<Link to="/login">
						<Button variant="outline-success" size="lg">
							Log In
						</Button>
					</Link>
				)}
			</nav>
		</Container>
	);
};

export default Header;
