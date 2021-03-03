import React from 'react';
import '../App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import GameStart from './GamePgs/GameStart';
import Game1 from './GamePgs/Game1';
import Game1_1 from './GamePgs/Game1_1';
import Game1_2 from './GamePgs/Game1_2';
import Game1_3 from './GamePgs/Game1_3';
import Game1_4 from './GamePgs/Game1_4';
import Game2 from './GamePgs/Game2';
import Game2_1 from './GamePgs/Game2_1';
import Game2_2 from './GamePgs/Game2_2';
import Game2_3 from './GamePgs/Game2_3';
import Game2_4 from './GamePgs/Game2_4';
import Game2_5 from './GamePgs/Game2_5';
import Game3 from './GamePgs/Game3';
import Game3_1 from './GamePgs/Game3_1';
import Game3_2 from './GamePgs/Game3_2';
import Game3_3 from './GamePgs/Game3_3';
import Game3_4 from './GamePgs/Game3_4';
import Game4 from './GamePgs/Game4';
import Game5 from './GamePgs/Game5';
import Game5_1 from './GamePgs/Game5_1';
import Game5_2 from './GamePgs/Game5_2';
import Game5_3 from './GamePgs/Game5_3';
import Game5_4 from './GamePgs/Game5_4';
import Game5_5 from './GamePgs/Game5_5';
import Game6 from './GamePgs/Game6';
import Game6_1 from './GamePgs/Game6_1';
import Game8 from './GamePgs/Game8';
import Game8_1 from './GamePgs/Game8_1';
import Game8_2 from './GamePgs/Game8_2';
import Game8_3 from './GamePgs/Game8_3';
import Game8_4 from './GamePgs/Game8_4';

function Game() {
	return (
		<Router>
			<Route path="/game/1" component={Game1} />
			<Route path="/game/1_1" component={Game1_1} />
			<Route path="/game/1_2" component={Game1_2} />
			<Route path="/game/1_3" component={Game1_3} />
			<Route path="/game/1_4" component={Game1_4} />
			<Route path="/game/2" component={Game2} />
			<Route path="/game/2_1" component={Game2_1} />
			<Route path="/game/2_2" component={Game2_2} />
			<Route path="/game/2_3" component={Game2_3} />
			<Route path="/game/2_4" component={Game2_4} />
			<Route path="/game/2_5" component={Game2_5} />
			<Route path="/game/3" component={Game3} />
			<Route path="/game/3_1" component={Game3_1} />
			<Route path="/game/3_2" component={Game3_2} />
			<Route path="/game/3_3" component={Game3_3} />
			<Route path="/game/3_4" component={Game3_4} />
			<Route path="/game/4" component={Game4} />
			<Route path="/game/5" component={Game5} />
			<Route path="/game/5_1" component={Game5_1} />
			<Route path="/game/5_2" component={Game5_2} />
			<Route path="/game/5_3" component={Game5_3} />
			<Route path="/game/5_4" component={Game5_4} />
			<Route path="/game/5_5" component={Game5_5} />
			<Route path="/game/6" component={Game6} />
			<Route path="/game/6_1" component={Game6_1} />
			<Route path="/game/8" component={Game8} />
			<Route path="/game/8_1" component={Game8_1} />
			<Route path="/game/8_2" component={Game8_2} />
			<Route path="/game/8_3" component={Game8_3} />
			<Route path="/game/8_4" component={Game8_4} />
		</Router>
	);
}

export default Game;
