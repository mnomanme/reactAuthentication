import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';
import logo from '../../resources/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Container className="header">
				<img src={logo} alt="" />
				<nav>
					<Link to="/shop">Shop</Link>
					<Link to="/review">Order Review</Link>
					<Link to="/inventory">Manage Inventory</Link>
				</nav>
			</Container>
		</div>
	);
};

export default Header;
