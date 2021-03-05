import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/make_school.png';
import bg from './images/make_school_classroom_background.png';

function LandingPg() {
	return (
		<div class="body mt-5">
			<div class="html ">
				<img src={bg} id="bg" alt="MS Background" />
				<div class="container">
					<div class="card text-white" id="hero">
						<div class="row">
							<div class="col-6">
								<div class="card-body mt-5">
									<h5 class="card-title display-1" style={{ fontSize: 70 }}>
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
										<div class="col w-100 mt-3">
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
								<img class="w-100" src={logo} alt="Make School Logo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPg;
