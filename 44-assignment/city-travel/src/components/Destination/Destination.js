import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';
import Direction from '../Direction/Direction';
import DirectionResults from '../DirectionResults/DirectionResults';
import Map from '../Map/Map';

const Destination = () => {
	let { type } = useParams({});

	if (!type) {
		type = 'car';
	}
	const [directionRoute, SetDirectionRoute] = useState({});

	const handleDirectionRoute = (event) => {
		event.preventDefault();
		SetDirectionRoute({
			[event.target[0].name]: [event.target[0].value],
			[event.target[1].name]: [event.target[1].value],
		});
	};

	return (
		<Container>
			<section className="row d-flex justify-content-center mt-5">
				{!directionRoute.origin ? <Direction handleDirectionRoute={handleDirectionRoute} /> : <DirectionResults directionRoute={directionRoute} type={type} />}
				<Map directionRoute={directionRoute} />
			</section>
		</Container>
	);
};

export default Destination;
