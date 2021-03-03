import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game1_2 from Game1_2;

function Game1_1() {
	return (
		<Link to={'/game/1_2'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
					[Enter main front area]
				</header>
			</section>
        </Link>
	);
}

export default Game1_1;
