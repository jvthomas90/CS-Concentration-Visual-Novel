import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game3_4 from Game3_4;

function Game3_3() {
	return (
		<Link to='/game/3_4'>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">{{users_name}}</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                Man, although I know what each role of each concentration does, I still don’t know which concentration to pick.
                                I should start thinking about it now. Or maybe I should ask for opinions?
							</p>
						</div>
					</div>
				</div>
			</section>
		</Link>
	);
}

export default Game3_3;
