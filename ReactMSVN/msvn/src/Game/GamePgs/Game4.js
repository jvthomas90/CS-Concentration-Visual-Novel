import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Game5 from './Game5'
// import Game6 from './Game6'
// import Game7 from'./Game7'

function Game4() {
	return (

			<section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<Link to={`/game/5`}>
                            <div
                                class="optionsbox buttontext"
                                style={{ left: 550, top: 400 }}
                            >
                                <header>Ask Dan for more information on concentration.</header>
                            </div>
                    </Link>
					<Link to={`/game/6`}>
                        <a href="#">
                            <div
                                class="optionsbox buttontext"
                                style={{ left: 550, top: 485 }}
                            >
                                <header>Go to Study area.</header>
                            </div>
                        </a>
                    </Link>
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">Dan</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
								Task: Find out what concentration to choose.
							</p>
						</div>
					</div>
				</div>
			</section>
	);
}

export default Game4;
