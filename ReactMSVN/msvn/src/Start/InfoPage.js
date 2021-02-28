import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function InfoPage() {
	return (
		<form action="info_page.html" method="GET">
			<div id="inputs">
				<p>
					Your Name:
					<input type="text" value="Bill" name="users_name" />
				</p>
				<p>
					Your Gender:
					<input type="op-type" name="users_gender" />
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</p>
				<p>
					Your Age:
					<input type="number" /*value=18*/ name="users_age" />
				</p>
				<p>
					<Link to={`/ask`}>
						<button> Continue</button>
					</Link>
				</p>
			</div>
		</form>
	);
}

export default InfoPage;
