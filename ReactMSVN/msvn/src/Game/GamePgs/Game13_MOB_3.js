import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game13_MOB_3() {
	return (
		<Link to={'/game/13_MOB_4'}>
            <div>
                <section class="d-flex justify-content-center align-items-center m-5">
                    <div class="column customsection">
                        <div class="backgroundtext align-items-center col-md">
                            <h3 class="name">User</h3>
                            <div class="line mb-5"></div>
                            <div class="container d-flex justify-content-center px-5">
                                <p class="mb-5 dialogue">
                                    Alright, I think I might choose that! Thanks Dan!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
	);
}

export default Game13_MOB_3;
