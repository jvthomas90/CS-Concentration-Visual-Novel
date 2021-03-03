import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'; 
//need to import screen Game13 (the ending screen for link on buttons)
import 'bootstrap/dist/css/bootstrap.min.css';

function Game12_8() {
	return (
		<div>
			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
                	<Link to={`/game/2`}>
						<div class="optionsbox buttontext" style={{left: 550, top: 400}}>
							<header>Visualization of Data, Artificial Intelligence, Organization.</header>
						</div>
					</Link>
                	<Link to={`/game/2`}>
						<div class="optionsbox buttontext" style={{left: 550, top: 485}}>
							<header>Background functions, Connecting databases, Fine-tuning.</header>
						</div>
					</Link>
                	<Link to={`/game/2`}>
						<div class="optionsbox buttontext" style={{left: 550, top: 570}}>
							<header>Developing user experience/interface, Design, Artistic, Creative.</header>
						</div>
					</Link>
                	<Link to={`/game/2`}>
						<div class="optionsbox buttontext" style={{left: 550, top: 570}}>
							<header>Mobile games, Smartphones, Accessibility.</header>
						</div>
					</Link>

					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Dan</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
							First things first, out of these activities and working concepts, 
							which do you like the most or interests you the most?
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Game12_8;
