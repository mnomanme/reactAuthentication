import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FirebaseAuth from './components/FirebaseAuth/FirebaseAuth';

function App() {
	return (
		<div className="App">
			<h2>Firebase Authentication</h2>
			<FirebaseAuth />
		</div>
	);
}

export default App;
