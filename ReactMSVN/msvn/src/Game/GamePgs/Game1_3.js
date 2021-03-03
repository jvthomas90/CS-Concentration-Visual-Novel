import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game1_4 from Game1_4;

function Game1_3() {
	return (
		<Link to={'/game/1_4'}>
			<section class="d-flex justify-content-center align-items-center m-5">
				<header>
                    [“Frantically walks to class”]
				</header>
			</section>
        </Link>
	);
}

export default Game1_3;
