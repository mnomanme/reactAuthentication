import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import Review from '../Review/Review';
import ManageInventory from '../ManageInventory/ManageInventory';
import NotFound from '../NotFound/NotFound';
import ProductDetails from '../ProductDetails/ProductDetails';
import Shipment from '../Shipment/Shipment';
import Login from '../Login/Login';
import { Container } from 'react-bootstrap';

export const userContext = createContext();

const Layouts = () => {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<userContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Container>
				<h5 className="bg-info rounded text-center">email: {loggedInUser.email}</h5>
			</Container>
			<Header />
			<Router>
				<Switch>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/review">
						<Review />
					</Route>
					<Route path="/inventory">
						<ManageInventory />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/shipment">
						<Shipment />
					</Route>
					<Route exact path="/">
						<Shop />
					</Route>
					<Route path="/product/:productKey">
						<ProductDetails />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</userContext.Provider>
	);
};

export default Layouts;
