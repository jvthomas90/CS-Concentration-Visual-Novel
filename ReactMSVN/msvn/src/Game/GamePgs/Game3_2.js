import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game3_3 from './Game3_3';

function Game3_2() {
	return (
		<Link to='/game/3_3'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Dan</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                Alrighty y'all! That’s it for today’s class. Great work everyone.
                                I’m super satisfied with the results of today. Y'all are free to leave. See you on Wednesday.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game3_2;
