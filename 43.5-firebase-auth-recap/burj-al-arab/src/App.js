import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';

export const LoginContext = createContext();

const App = () => {
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<LoginContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<p className="text-center text-info">{loggedInUser.name}</p>
			<Router>
				<Header />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/book/:bedType">
						<Book />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</LoginContext.Provider>
	);
};

export default App;
