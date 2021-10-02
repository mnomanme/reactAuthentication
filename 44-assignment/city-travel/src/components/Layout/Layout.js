import React, { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Destination from '../Destination/Destination';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { NotMatch } from '../NotMatch/NotMatch';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const userContext = createContext();

const Layout = () => {
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<userContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Container>
					<h5 className="bg-info rounded text-center">email: {loggedInUser?.email}</h5>
				</Container>
				<Header />
				<Switch>
					<Route exact path="/home">
						<Home />
					</Route>
					<PrivateRoute path="/destination">
						<Destination />
					</PrivateRoute>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="*">
						<NotMatch />
					</Route>
				</Switch>
			</Router>
		</userContext.Provider>
	);
};

export default Layout;
