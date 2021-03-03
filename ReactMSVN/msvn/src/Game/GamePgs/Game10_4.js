import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game10_4() {
	return (
		<Link to={'/game/10_5'}>
            <div>
                <section class="d-flex justify-content-center align-items-center m-5">
                    <div class="column customsection">
                        {/* <Link to={`/game/2`}>
                            <div class="optionsbox buttontext" style={{ left: 550, top: 400 }}>
                                <header>Lorem ipsum dolor sit amet.</header>
                            </div>
                        </Link>
                        <a href="#">
                            <div class="optionsbox buttontext" style={{ left: 550, top: 485 }}>
                                <header>Lorem ipsum dolor sit amet.</header>
                            </div>
                        </a>
                        <a href="#">
                            <div class="optionsbox buttontext" style={{ left: 550, top: 570 }}>
                                <header>asf</header>
                            </div>
                        </a> */}
                        <div class="backgroundtext align-items-center col-md">
                            <h3 class="name">Ernest</h3>
                            <div class="line mb-5"></div>
                            <div class="container d-flex justify-content-center px-5">
                                <p class="mb-5 dialogue">
                                    Oh, I see. I’m doing front end web.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
	);
}

export default Game10_4;
