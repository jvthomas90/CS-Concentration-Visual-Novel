import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function LandingPg() {
	return (
		<div>
			<img
				src="./images/make_school_classroom_background.png"
				id="bg"
				alt="MS Background"
			/>
			<div class="container">
				<div class="card text-white" id="hero">
					<div class="row">
						<div class="col-6">
							<div class="card-body">
								<h5 class="card-title display-1">
									<strong>Choose Your Concentration</strong>
								</h5>
								<h6 class="card-subtitle display-6">
									Need help choosing a concentration? Try this interactive
									visual novel!
								</h6>
								<div class="row row-cols-1 gy-5 my-1">
									<div class="col w-100">
										<Link to={`/start`}>
											<button class="btn btn-primary w-50">
												<strong>Start Your Journey!</strong>
											</button>
										</Link>
									</div>
									<div class="col w-100">
										<Link>
											<button class="btn btn-primary px-5 w-50">
												<strong>About</strong>
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div class="col-6">
							<img
								class="w-100"
								src="./images/make_school.png"
								alt="Make School Logo"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPg;
