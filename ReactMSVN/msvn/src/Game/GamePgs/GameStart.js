import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function GameStart() {
	return (
		<div>
			<section class="d-flex justify-content-center align-items-center m-5">
				<Link to={`/game/1`}>
					<button>Start!</button>
				</Link>
			</section>
		</div>
	);
}

export default GameStart;
