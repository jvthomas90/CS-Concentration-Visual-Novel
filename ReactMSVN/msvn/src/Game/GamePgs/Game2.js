import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game2_1 from './Game2_1';

function Game2() {
	return (
		<Link to='/game/2_1'>
            <section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">User</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
								Hey! What’s up Joel? 
							</p>
						</div>
					</div>
				</div>
			</section>
        </Link>
	);
}

export default Game2;
