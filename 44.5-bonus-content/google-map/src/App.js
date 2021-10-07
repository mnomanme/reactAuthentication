import React, { useState } from 'react';
import Direction from './components/Direction';

const App = () => {
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	return (
		<>
			<input type="text" placeholder="Origin" onBlur={(e) => setOrigin(e.target.value)} />
			<input type="text" placeholder="Destination" onBlur={(e) => setDestination(e.target.value)} />
			<Direction origin={origin} destination={destination} />
		</>
	);
};

export default App;
