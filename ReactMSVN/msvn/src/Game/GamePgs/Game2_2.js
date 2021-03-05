import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game2_3 from './Game2_3';

function Game2_2() {
	return (
		<Link to='/game/2_3'>
            <section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Joel</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                No? You don’t have a concentration you want to choose? Well, I’m gonna be doing data science. 
							</p>
						</div>
					</div>
				</div>
			</section>
        </Link>
	);
}

export default Game2_2;
