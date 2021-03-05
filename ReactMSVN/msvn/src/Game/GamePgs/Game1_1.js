import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game1_2 from './Game1_2';

function Game1_1() {
	return (
		<div style={{ backgroundColor: 'black', width: '100vw', height: '100vh'}}>
			<Link to='/game/1_2' class="d-flex justify-content-center align-items-center"  style={{width: '100vw', height: '100vh'}}>
					<header style={{ fontSize: 40}}>[Enter main front area]</header>
			</Link>
		</div>
	);
}

export default Game1_1;
