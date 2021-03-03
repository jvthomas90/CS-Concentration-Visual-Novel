import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game8_4 from Game8_4;

function Game8_3() {
	return (
		<Link to='/game/8_4'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Joel</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                Why? Hmm.. I’m mostly picking it because I’ve always been good at math.
                                Even throughout high school, math was always a breeze for me.
                                Other than that, I also really enjoy making visualizations of data.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game8_3;
