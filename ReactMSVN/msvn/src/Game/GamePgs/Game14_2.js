import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game14_2() {
	return (
		<div style={{ backgroundColor: 'black', width: '100vw', height: '100vh'}}>
			<Link to='/game/14_3' class="d-flex justify-content-center align-items-center"  style={{width: '100vw', height: '100vh'}}>
					<header style={{ fontSize: 40}}>[Black out to text: “5 years later”]</header>
			</Link>
		</div>
	);
}

export default Game14_2;
