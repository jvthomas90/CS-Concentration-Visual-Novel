import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game6_1 from Game6_1;

function Game6() {
	return (
		<Link to={'/game/6_1'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
                    [Walks into Lounge area]
				</header>
			</section>
        </Link>
	);
}

export default Game6;
