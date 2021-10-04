import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import fakeData from '../../fakeData/FakeData.json';

const DirectionResults = (props) => {
	const { directionRoute, type } = props;

	const [destinationRider, setDestinationRider] = useState([]);

	useEffect(() => {
		const filterData = fakeData.filter((data) => data.type === type);
		setDestinationRider(filterData);
	}, [type]);

	return (
		<Container>
			<section className="w-75 bg-light p-2">
				<div className="bg-danger rounded lead ps-4 fs-4">
					<p>{directionRoute.origin}</p>
					<p>{directionRoute.destination}</p>
				</div>
			</section>
			<section>
				{destinationRider.map((data) => {
					const { imgUrl, type, price, capacity } = data;
					return (
						<section>
							<img src={imgUrl} alt="" />
							<h6>{type}</h6>
							<FontAwesomeIcon icon={faUserFriends} />
							<p>{capacity}</p>
							<p>{price}</p>
						</section>
					);
				})}
			</section>
		</Container>
	);
};

export default DirectionResults;
