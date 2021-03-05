import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game8_1 from Game8_1;
// import Game9_1 from Game9_1;
// import Game10_1 from Game10_1;
// import Game11_1 from Game11_1;

function Game6_1() {
	return (
		<div>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<Link to='/game/8'>
						<div class="optionsbox buttontext" style="left: 550; top: 400">
							<header>Joel</header>
						</div>
					</Link>
					<Link to='/game/9_1'>
						<div class="optionsbox buttontext" style="left: 550; top: 400">
							<header>Chris</header>
						</div>
					</Link>
					<Link to='/game/10_1'>
						<div class="optionsbox buttontext" style="left: 550; top: 400">
							<header>Ernest</header>
						</div>
					</Link>
                    <Link to='/game/11_1'>
						<div class="optionsbox buttontext" style="left: 550; top: 400">
							<header>Johnny</header>
						</div>
					</Link>

					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Dan</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<Link to='/game/4'>
								<p class="mb-5 dialogue">
									Click to go back to Main Room
								</p>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Game6_1;
