import React from 'react';
import { Container } from 'react-bootstrap';

const Direction = (props) => {
	const handleDirectionRoute = props.handleDirectionRoute;

	return (
		<Container>
			<section className="col-sm-4">
				<form onSubmit={handleDirectionRoute}>
					<h5>Pick From</h5>
					<input required type="text" name="origin" placeholder="From where" className="form-control mt-3 mb-3" />
					<h5>Pick To</h5>
					<input required type="text" name="destination" placeholder="Going to" className="form-control mt-3 mb-3" />
					<input type="submit" value="Search" className="w-100 btn btn-outline-warning form-control " />
				</form>
			</section>
		</Container>
	);
};

export default Direction;
