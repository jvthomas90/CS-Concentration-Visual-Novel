import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game5_4 from Game5_4;

function Game5_3() {
	return (
		<Link to='/game/5_4'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Dan</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                I have a bit of time in a moment, sure! You wanna meet in stonehenge in 20 minutes?
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game5_3;
