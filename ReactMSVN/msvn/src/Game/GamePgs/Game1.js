import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game1_1 from Game1_1;

function Game1() {
	return (
		<Link to='/game/1_1'>
		<div>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>You are in a rush to class</header>
			</section>
		</div>
		</Link>
	);
}

export default Game1;
