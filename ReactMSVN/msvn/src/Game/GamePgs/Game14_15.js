import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game14_15() {
	return (
		<Link to={'/game/14_16'}>
            <div>
                <section class="d-flex justify-content-center align-items-center m-5">
                    <div class="column customsection2">
                        <div class="backgroundtext align-items-center col-md">
                            <h3 class="name">Dan</h3>
                            <div class="line mb-5"></div>
                            <div class="container d-flex justify-content-center px-5">
                                <p class="mb-5 dialogue">
                                    I’m happy to hear that I had that much influence on you. Where do you work now?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
	);
}

export default Game14_15;
