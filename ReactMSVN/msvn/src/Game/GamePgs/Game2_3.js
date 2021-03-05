import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game2_4 from './Game2_4';

function Game2_3() {
	return (
		<Link to='/game/2_4'>
            <section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Joel</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
                                Hmm, you might want to talk to Dan about choosing your concentration later. Well, I’m gonna be late to class, you should get going too. Cya. 
							</p>
						</div>
					</div>
				</div>
			</section>
        </Link>
	);
}

export default Game2_3;
