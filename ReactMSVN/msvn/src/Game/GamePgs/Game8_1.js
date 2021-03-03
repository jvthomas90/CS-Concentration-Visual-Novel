import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game8_2 from Game8_2;

function Game8_1() {
	return (
		<Link to='/game/8_2'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Joel</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                Hey again! How are you?
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game8_1;
