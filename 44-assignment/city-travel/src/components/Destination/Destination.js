import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/FakeData.json';

const Destination = () => {
	// const { title } = useParams();

	// const [transport, setTransport] = useState([]);

	// useEffect(() => {
	// 	setTransport(fakeData);
	// }, []);

	// const showData = transport.filter((name) => name === title);
	// const [ready, setReady] = useState(false);
	// const [place, setPlace] = useState({
	// 	from: '',
	// 	to: '',
	// 	showData: '',
	// });

	// const handleBlur = (e) => {
	// 	let getInfo = true;
	// 	if (getInfo) {
	// 		const newPlace = { ...place };
	// 		newPlace[e.target.name] = e.target.value;
	// 		setPlace(newPlace);
	// 	}
	// };

	// const handleSubmit = () => {
	// 	setReady(!ready);
	// };

	const [searchResult, setSearchResult] = useState({});
	const [destination, setDestination] = useState({
		from: '',
		to: '',
	});
	const [result, setResult] = useState(false);
	let { title } = useParams();
	const handleSearch = (e) => {
		const searchResultById = fakeData.find((vehicle) => vehicle.id === title);
		setSearchResult(searchResultById);
		setResult(true);
		if (e.target.value === '') {
			alert('Error');
		}
		e.preventDefault();
	};
	const handleBlur = (e) => {
		if (e.target.name === 'from') {
			const newDestination = { ...destination };
			newDestination.from = e.target.value;
			setDestination(newDestination);
		} else if (e.target.name === 'to') {
			const newDestination = { ...destination };
			newDestination.to = e.target.value;
			setDestination(newDestination);
		}
	};
	const { imgUrl, capacity, price } = searchResult;
	console.log(searchResult.title);

	return (
		<>
			<div className="container">
				<div className="parent row g-4" style={{ marginTop: '7rem' }}>
					<div style={{ height: result && '460px' }} className="pick-up col-lg-6">
						{!result && (
							<form onSubmit={handleSearch} action="">
								<h5>Pick From</h5>
								<input className="form-control mt-3 mb-3" name="from" onBlur={handleBlur} type="text" required />
								<h5>Pick To</h5>
								<input className="form-control mt-3 mb-3" name="to" type="text" onBlur={handleBlur} required />
								<button className="w-100 btn btn-success" type="submit">
									Search
								</button>
							</form>
						)}
						{result && (
							<div className="red-destination-div">
								<h4>From: {destination?.from}</h4>
								<br />
								<h4>To: {destination?.to}</h4>
							</div>
						)}
						{result && (
							<div className="search-results">
								<img className="title-icon" src={searchResult?.imgUrl && imgUrl} alt="" />
								<h4>{searchResult.title && title}</h4>
								{/* <img className="people-icon" src={People} alt="" /> */}
								<h4>{searchResult && capacity}</h4>
								<div className="price">
									<h4>${searchResult && price}</h4>
								</div>
							</div>
						)}
						{result && (
							<div className="search-results">
								<img className="title-icon" src={searchResult?.imgUrl && imgUrl} alt="" />
								<h4>{searchResult.title && title}</h4>
								{/* <img className="people-icon" src={People} alt="" /> */}
								<h4>{searchResult && capacity}</h4>
								<div className="price">
									<h4>${searchResult && price}</h4>
								</div>
							</div>
						)}
						{result && (
							<div className="search-results">
								<img className="title-icon" src={searchResult?.imgUrl && imgUrl} alt="" />
								<h4>{searchResult.title && title}</h4>
								{/* <img className="people-icon" src={People} alt="" /> */}
								<h4>{searchResult && capacity}</h4>
								<div className="price">
									<h4>${searchResult && price}</h4>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* <Container className="mt-5">
				<Row>
					<Col xs={12} sm={4}>
						{!ready && (
							<Form onSubmit={handleSubmit} className="locationCard m-2 p-3">
								<Col className="m-2">
									<Form.Group hasValidation controlId="formGroupEmail">
										<Form.Label>Start From</Form.Label>
										<Form.Control name="from" onBlur={handleBlur} type="text" placeholder="Cantonment" required isInvalid />
										<Form.Control.Feedback type="invalid">Please choose a Location From.</Form.Control.Feedback>
									</Form.Group>
									<Form.Group hasValidation controlId="formGroupPassword">
										<Form.Label>Destination To</Form.Label>
										<Form.Control name="to" onBlur={handleBlur} type="text" placeholder="Mirpur-2" required isInvalid />
										<Form.Control.Feedback type="invalid">Please choose a Location To.</Form.Control.Feedback>
									</Form.Group>
									<Form.Group controlId="formGroupDate">
										<Form.Label>Journey Date</Form.Label>
										<Form.Control name="date" onBlur={handleBlur} type="date" placeholder="journey date" required isInvalid />
										<Form.Control.Feedback type="invalid">Please choose Date of Journey.</Form.Control.Feedback>
									</Form.Group>
									<Col>
										<Button type="submit" to={title} size="lg" block>
											Submit form
										</Button>
									</Col>
								</Col>
							</Form>
						)}
						{ready && (
							<div className="locationShow">
								<div>
									<h2>Great! You have found some options</h2>
									<h4>From: {place.from}</h4>
									<h3>To: {place.to} </h3>
									<p>date: {place.date}</p>
								</div>
								<p>
									<img src={fakeData[0]?.imgUrl} height="60px" alt="" /> <span>{fakeData[0]?.name}</span> 1 Price:
									{fakeData[0]?.price}$
								</p>
								<hr />
								<p>
									<img src={fakeData[0]?.imgUrl} height="60px" alt="" /> <span>{fakeData[0]?.name}</span> 1 Price:
									{fakeData[0]?.price}$
								</p>
								<hr />
								<p>
									<img src={fakeData[0]?.imgUrl} height="60px" alt="" /> <span>{fakeData[0]?.name}</span> 1 Price:
									{fakeData[0]?.price}$
								</p>
								<hr />
							</div>
						)}
						{ready && (
							<div className="locationShow">
								<div>
									<h2>Great! You have found some options</h2>
									<h4>From: {place.from}</h4>
									<h3>To: {place.to} </h3>
									<p>date: {place.date}</p>
								</div>
								<p>
									<img src={fakeData[1]?.imgUrl} height="60px" alt="" /> <span>{fakeData[1]?.name}</span> - 2 Price:
									{fakeData[1]?.price}$
								</p>
								<hr />
								<p>
									<img src={fakeData[1]?.imgUrl} height="60px" alt="" /> <span>{fakeData[1]?.name}</span> - 2 Price:
									{fakeData[1]?.price}$
								</p>
								<hr />
								<p>
									<img src={fakeData[1]?.imgUrl} height="60px" alt="" /> <span>{fakeData[1]?.name}</span> - 2 Price:
									{fakeData[1]?.price}$
								</p>
							</div>

							// <p>
							// 	<img src={fakeData[2]?.imgUrl} height="60px" alt="" /> <span>{fakeData[2]?.name}</span> - 4 Price:
							// 	{fakeData[2]?.price}$
							// </p>
						)}
					</Col>
				</Row>
			</Container> */}
		</>
	);
};

export default Destination;
