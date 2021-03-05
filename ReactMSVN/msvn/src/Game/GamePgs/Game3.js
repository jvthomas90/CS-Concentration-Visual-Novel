import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game3_1 from './Game3_1';

function Game3() {
	return (
		<Link to='/game/3_1'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Dan</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
								Hey User, we just got started, try not to be late next time.
								Alright, since term 1 is about to come to an end, we’re gonna be choosing concentrations.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game3;
