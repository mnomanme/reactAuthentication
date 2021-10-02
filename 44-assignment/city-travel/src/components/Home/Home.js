import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/FakeData.json';

const Home = () => {
	const [transport, setTransport] = useState([]);

	useEffect(() => {
		setTransport(fakeData);
	}, []);

	return (
		<>
			<h2>This is Home{transport.length}</h2>
		</>
	);
};

export default Home;
