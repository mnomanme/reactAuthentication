import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Transports.css';

const Transports = (props) => {
	const { title, imgUrl } = props.vehicle;

	const history = useHistory();

	const handleTransport = (transportType) => {
		history.push(`/destination/${transportType}`);
	};

	return (
		<Col lg={4} md={6} xs={12} className="vehicle">
			<Card onClick={handleTransport} className="Card">
				<img className="Logo" variant="top" alt="transport" src={imgUrl} />
				<Card.Body>
					<h5>{title}</h5>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Transports;
