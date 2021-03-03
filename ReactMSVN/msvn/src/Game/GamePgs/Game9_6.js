import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game9_6() {
	return (
		<Link to={'/game/9_7'}>
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
                            <h3 class="name">Chris</h3>
                            <div class="line mb-5"></div>
                            <div class="container d-flex justify-content-center px-5">
                                <p class="mb-5 dialogue">
                                    Mobile is where the fun is. Mobile apps are where all the money makers are most people now are addicted to their phones. Also, it’s crazy to think about the fact that you can do what computers can do with just a mobile device. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
	);
}

export default Game9_6;
