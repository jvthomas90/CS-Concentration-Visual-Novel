import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game14_16() {
	return (
		<Link to={'/game/14_17'}>
            <div>
                <section class="d-flex justify-content-center align-items-center m-5">
                    <div class="column customsection2">
                        <div class="backgroundtext align-items-center col-md">
                            <h3 class="name">User</h3>
                            <div class="line mb-5"></div>
                            <div class="container d-flex justify-content-center px-5">
                                <p class="mb-5 dialogue">
                                    I’m a senior manager at Google now! The work we do here is motivating and innovative. I love it here!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
	);
}

export default Game14_16;
