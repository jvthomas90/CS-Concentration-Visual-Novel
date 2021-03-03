import React from 'react';
import '../App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import GameStart from './GamePgs/GameStart';
import Game1 from './GamePgs/Game1';
import Game2 from './GamePgs/Game2';
import Game3 from './GamePgs/Game3';
import Game4 from './GamePgs/Game4';

function Game() {
	return (
		<Router>
			<Route path="/game/1" component={Game1} />
			<Route path="/game/2" component={Game2} />
			<Route path="/game/3" component={Game3} />
			<Route path="/game/4" component={Game4} />
			<Route path="/game/9_1" component={Game9_1}></Route>
			<Route path="/game/9_2" component={Game9_2}></Route>
			<Route path="/game/9_3" component={Game9_3}></Route>
			<Route path="/game/9_4" component={Game9_4}></Route>
			<Route path="/game/9_5" component={Game9_5}></Route>
			<Route path="/game/9_6" component={Game9_6}></Route>
			<Route path="/game/9_7" component={Game9_7}></Route>
			<Route path="/game/9_8" component={Game9_8}></Route>
		</Router>
	);
}

export default Game;
