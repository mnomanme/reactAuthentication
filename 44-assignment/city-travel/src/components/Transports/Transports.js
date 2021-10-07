import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import './Transports.css';

const Transports = (props) => {
	const { type, imgUrl } = props.transport;

	// const history = useHistory();

	// const handleTransport = (type) => {
	// 	history.push(`/destination/${type}`);
	// };

	return (
		<Col lg={4} md={6} xs={12} className="Transport">
			<Card className="Card">
				<Link to={`/destination/${type}`}>
					<img className="Logo" variant="top" alt="transport" src={imgUrl} />
				</Link>
				<Card.Body>
					<h5>{type}</h5>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Transports;
