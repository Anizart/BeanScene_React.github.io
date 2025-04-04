import React from "react"
import bg from "@assets/section_welcome.webp"
import "./welcome.css"

const Welcome = () => {
	return (
		<section className="section welcome" id="home">
			<div className="welcome__wrapper-img">
				<img
					src={bg}
					alt="coffee made with love"
					className="welcome__img"
				/>
			</div>
			<div className="container">
				<div className="row">
					<div className="welcome__offer col-md-5 col-lg-6">
						<h2 className="welcome__subtitle">
							We’ve got your morning covered with
						</h2>
						<h1 className="welcome__title">Coffee</h1>
						<div className="welcome__descript">
							It is best to start your day with a cup of coffee.
							Discover the best flavours coffee you will ever
							have. We provide the best for our customers.
						</div>
						<a href="#" className="btn welcome__btn">
							Order Now
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome
