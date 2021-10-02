import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<Container className="header">
			<nav>
				<Link to="/home">Home</Link>
				<Link to="/destination">Destination</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/contact">Contact</Link>
				<Button onClick="/" variant="outline-warning " size="lg">
					Log In
				</Button>
			</nav>
		</Container>
	);
};

export default Header;
