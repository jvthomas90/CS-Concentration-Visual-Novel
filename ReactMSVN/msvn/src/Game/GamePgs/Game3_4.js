import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game4 from Game4;

function Game3_4() {
	return (
		<Link to={'/game/4'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
                    [Leave Classroom]
				</header>
			</section>
        </Link>
	);
}

export default Game3_4;
