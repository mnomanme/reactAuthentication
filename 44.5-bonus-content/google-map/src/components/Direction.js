import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import GoogleMapAPIKEY from '../config';

const containerStyle = {
	width: '100%',
	height: '400px',
};

const location = {
	lat: -34.619598,
	lng: -58.428471,
};

const Direction = ({ origin, destination }) => {
	const [directionResponse, setDirectionResponse] = useState(null);

	return (
		<LoadScript googleMapsApiKey={GoogleMapAPIKEY}>
			<GoogleMap mapContainerStyle={containerStyle} center={location} zoom={16}></GoogleMap>
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
					// optional
					onLoad={(directionsService) => {
						console.log('DirectionsService onLoad directionsService: ', directionsService);
					}}
					// optional
					onUnmount={(directionsService) => {
						console.log('DirectionsService onUnmount directionsService: ', directionsService);
					}}
				/>
			)}
			{directionResponse && (
				<DirectionsRenderer
					// required
					options={{
						directions: directionResponse,
					}}
					// optional
					onLoad={(directionsRenderer) => {
						console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer);
					}}
					// optional
					onUnmount={(directionsRenderer) => {
						console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer);
					}}
				/>
			)}
		</LoadScript>
	);
};

export default Direction;
