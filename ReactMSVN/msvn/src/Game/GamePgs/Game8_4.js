import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game8_5 from Game8_5;

function Game8_4() {
	return (
		<Link to='/game/8_5'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">User</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                I see, thanks! I think that gave me a better understanding of data science. I’m gonna head out now. Bye!
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game8_4;
