import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game15() {
	return (
		<div style={{ backgroundColor: 'black', width: '100vw', height: '100vh'}}>
			<Link to={'/'} class="d-flex justify-content-center align-items-center"  style={{width: '100vw', height: '100vh'}}>
					<header style={{ fontSize: 40}}>Fin</header>
			</Link>
		</div>
	);
}

export default Game15;
