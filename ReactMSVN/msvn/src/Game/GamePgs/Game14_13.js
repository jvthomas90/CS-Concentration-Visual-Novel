import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game14_13() {
	return (
		<Link to={'/game/14_14'}>
            <div>
                <section class="d-flex justify-content-center align-items-center m-5">
                    <div class="column customsection2">
                        <div class="backgroundtext align-items-center col-md">
                            <h3 class="name">Dan</h3>
                            <div class="line mb-5"></div>
                            <div class="container d-flex justify-content-center px-5">
                                <p class="mb-5 dialogue">
                                    Yeah! I saw you on TV last night for best software engineer of the year and I just wanted to give you a call to talk. You’ve achieved so much.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Link>
	);
}

export default Game14_13;
