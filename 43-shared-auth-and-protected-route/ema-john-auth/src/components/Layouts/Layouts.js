import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import Review from '../Review/Review';
import ManageInventory from '../ManageInventory/ManageInventory';
import NotFound from '../NotFound/NotFound';
import ProductDetails from '../ProductDetails/ProductDetails';

const Layouts = () => {
	return (
		<>
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
		</>
	);
};

export default Layouts;
