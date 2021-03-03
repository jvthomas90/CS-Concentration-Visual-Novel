import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game3_2 from Game3_2;

function Game3_1() {
	return (
		<Link to={'/game/3_2'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
                    [2 hours later]
				</header>
			</section>
        </Link>
	);
}

export default Game3_1;
