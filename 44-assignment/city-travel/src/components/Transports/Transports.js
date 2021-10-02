import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Transports.css';

const Transports = (props) => {
	const { title, capacity, imgUrl, price, avatar } = props.vehicle;

	return (
		<Col lg={4} md={6} xs={12} className="vehicle">
			<Card className="Card">
				<img className="Logo" variant="top" alt="transport" src={imgUrl} />
				<Card.Body>
					<h5>{title}</h5>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Transports;
