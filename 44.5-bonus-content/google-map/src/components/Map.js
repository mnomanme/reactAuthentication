import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GoogleMapAPIKEY from '../config';

const containerStyle = {
	width: '100%',
	height: '400px',
};

const location = {
	lat: -34.619598,
	lng: -58.428471,
};

const onLoad = (marker) => {
	console.log('marker');
};

const Map = () => {
	return (
		<LoadScript googleMapsApiKey={GoogleMapAPIKEY}>
			<GoogleMap mapContainerStyle={containerStyle} center={location} zoom={16}>
				<Marker onLoad={onLoad} location={location} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
