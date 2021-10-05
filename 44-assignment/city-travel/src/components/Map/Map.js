import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const location = {
	lat: 23.829120589974625,
	lng: 90.3896013307078,
};

const Map = ({ origin, destination }) => {
	const [directionResponse, setDirectionResponse] = useState(null);

	const mapStyle = {
		width: '100%',
		height: '400px',
	};

	return (
		<Container>
			<section className="col-sm-8">
				<LoadScript googleMapsApiKey={googleApiKey}>
					<GoogleMap mapContainerStyle={mapStyle} center={location} zoom={16} style={{ width: '100%', height: '400px' }}>
						{origin !== '' && destination !== '' && (
							<DirectionsService
								// required
								options={{
									destination: destination,
									origin: origin,
									travelMode: 'DRIVING',
								}}
								// required
								callback={(res) => {
									if (res !== null) {
										setDirectionResponse(res);
									}
								}}
							/>
						)}
						{directionResponse && (
							<DirectionsRenderer
								// required
								options={{
									directions: directionResponse,
								}}
							/>
						)}
					</GoogleMap>
				</LoadScript>
			</section>
		</Container>
	);
};

export default Map;
