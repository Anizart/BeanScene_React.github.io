import React from "react";
import "./office.css";

const Office = () => {
	return (
		<section class="office">
			<div class="container">
				<h1 class="title office__title">Personal Cabinet</h1>
				<div class="office__profile-info">
					<p>
						<strong>Username:</strong> Error
					</p>
					<p>
						<strong>Email:</strong> Error
					</p>
					<p>
						<strong>Address:</strong> Error
					</p>
				</div>
				<div class="office__wrapper-btn">
					<button type="button" class="btn btn-edit">
						Edit Profile
					</button>
					<button type="button" class="btn btn-exit">
						Exit
					</button>
				</div>
			</div>
		</section>
	);
};

export default Office;
