import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData/FakeData.json';
import Transports from '../Transports/Transports';

const Home = () => {
	const [transport, setTransport] = useState([]);

	useEffect(() => {
		setTransport(fakeData);
	}, []);

	return (
		<Container>
			<Row>
				{transport.map((vehicle) => {
					return <Transports key={vehicle.id} transport={vehicle} />;
				})}
			</Row>
		</Container>
	);
};

export default Home;
