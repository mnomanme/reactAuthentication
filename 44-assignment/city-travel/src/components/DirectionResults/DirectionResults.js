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
			<section className="col-sm-4">
				<section className="w-75 bg-info p-2 rounded">
					<div className="bg-secondary rounded 	 text-center">
						<p>{directionRoute.origin}</p>
						<p>{directionRoute.destination}</p>
					</div>

					{destinationRider.map((data) => {
						const { imgUrl, type, price, capacity } = data;
						return (
							<section className="d-flex justify-content-around">
								<img src={imgUrl} alt="" className="w-25" />
								<h6>{type}</h6>
								<FontAwesomeIcon icon={faUserFriends} />
								<p>{capacity}</p>
								<p>{price}</p>
							</section>
						);
					})}
				</section>
			</section>
		</Container>
	);
};

export default DirectionResults;
