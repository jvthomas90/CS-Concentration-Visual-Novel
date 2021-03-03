import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game2_5 from Game2_5;

function Game2_4() {
	return (
		<Link to={'/game/2_5'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
                    *Walking to class*
				</header>
			</section>
        </Link>
	);
}

export default Game2_4;
