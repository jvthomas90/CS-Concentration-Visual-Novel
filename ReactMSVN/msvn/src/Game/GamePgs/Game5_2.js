import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game5_3 from Game5_3;

function Game5_2() {
	return (
		<Link to='/game/5_3'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">User</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                I’m having some trouble picking my concentration and I was wondering if you had a couple minutes to discuss it with me.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game5_2;
