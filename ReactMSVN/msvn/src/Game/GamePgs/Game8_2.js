import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game8_3 from Game8_3;

function Game8_2() {
	return (
		<Link to='/game/8_3'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">{{users_name}}</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                I’m doing alright! I’m just still trying to figure out what concentration I want to pick.
                                If you don’t mind me asking, why are you picking data science?
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game8_2;
