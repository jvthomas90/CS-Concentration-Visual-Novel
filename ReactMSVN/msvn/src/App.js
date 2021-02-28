import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPg from './LandingPg';
import InfoPage from './Start/InfoPage';
import Game from './Game/Game';
import Ask from './Game/Ask';

function App() {
	return (
		<div>
			<Router>
				<Route exact path="/" component={LandingPg} />
				<Route path="/start" component={InfoPage} />
				<Route path="/ask" component={Ask} />
				<Route path="/game" component={Game} />
			</Router>
		</div>
	);
}

export default App;
