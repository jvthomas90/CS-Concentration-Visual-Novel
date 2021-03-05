import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game3 from './Game3';

function Game2_5() {
	return (
		<div style={{ backgroundColor: 'black', width: '100vw', height: '100vh'}}>
		<Link to='/game/3_1' class="d-flex justify-content-center align-items-center"  style={{width: '100vw', height: '100vh'}}>
				<header style={{ fontSize: 40}}>[Arrives to class]</header>
		</Link>
		</div>
	);
}

export default Game2_5;
