import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game6_1 from Game6_1;

function Game7() {
	return (
		<div style={{ backgroundColor: 'black', width: '100vw', height: '100vh'}}>
		<Link to='/game/12_1' class="d-flex justify-content-center align-items-center"  style={{width: '100vw', height: '100vh'}}>
				<header style={{ fontSize: 40}}>Waiting for Dan, he arrives and starts questioning</header>
		</Link>
	</div>
	);
}

export default Game7;