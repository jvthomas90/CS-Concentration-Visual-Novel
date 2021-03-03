import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game13_BEW_2() {
	return (
		<Link to={'/game/13_BEW_3'}>
            <div>
                <section class="d-flex justify-content-center align-items-center m-5">
                    <div class="column customsection">
                        <div class="backgroundtext align-items-center col-md">
                            <h3 class="name">Dan</h3>
                            <div class="line mb-5"></div>
                            <div class="container d-flex justify-content-center px-5">
                                <p class="mb-5 dialogue">
                                    In BEW, you will be creating the background functionality of the application. This concentration will be mainly focused on the technical aspects of the app and includes more fine-tuning. You’ll also be doing cyber security for the app. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
	);
}

export default Game13_BEW_2;
