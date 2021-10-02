import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Destination from '../Destination/Destination';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { NotMatch } from '../NotMatch/NotMatch';

const Layout = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route path="/destination">
					<Destination />
				</Route>
				<Route path="/blog">
					<Blog />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route exact path="*">
					<NotMatch />
				</Route>
			</Switch>
		</Router>
	);
};

export default Layout;
