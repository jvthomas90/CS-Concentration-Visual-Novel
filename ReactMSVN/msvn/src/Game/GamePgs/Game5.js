import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game5_1 from Game5_1;

function Game5() {
	return (
		<Link to='/game/5_1'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">User</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                Hi Dan! 
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game5;
