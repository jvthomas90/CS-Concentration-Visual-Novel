import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game1_1 from './Game1_1'; 

function Game1() {
	return (
		<div style={{ backgroundColor: 'black', width: '100vw', height: '100vh'}}>
			<Link to='/game/1_1' class="d-flex justify-content-center align-items-center"  style={{width: '100vw', height: '100vh'}}>
					<header style={{ fontSize: 40}}>You are in a rush to class</header>
			</Link>
		</div>
	);
}

export default Game1;
