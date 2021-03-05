import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game3_2 from './Game3_2';

function Game3_1() {
	return (
		<div style={{ backgroundColor: 'black', width: '100vw', height: '100vh'}}>
		<Link to='/game/3_2' class="d-flex justify-content-center align-items-center"  style={{width: '100vw', height: '100vh'}}>
				<header style={{ fontSize: 40}}>[2 hours later]</header>
		</Link>
		</div>
	);
}

export default Game3_1;
