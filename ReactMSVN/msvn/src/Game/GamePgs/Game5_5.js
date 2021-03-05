import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game12 from Game12;

function Game5_5() {
	return (
		<Link to={'/game/12'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
                    [Leave Classroom]
				</header>
			</section>
        </Link>
	);
}

export default Game5_5;
