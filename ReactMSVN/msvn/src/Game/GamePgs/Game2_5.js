import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game3 from Game3;

function Game2_5() {
	return (
		<Link to={'/game/3'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
                    [Arrives to class]
				</header>
			</section>
        </Link>
	);
}

export default Game2_5;
