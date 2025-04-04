import React from "react"
import "./about-us.css"
import splashOne from "@assets/spray.webp"
import cup from "@assets/section_2_cup.png"

const AboutUs = () => {
	return (
		<section className="section about-us" id="about-us">
			<div className="img-bg about-us__wrapper-img-splash">
				<img
					src={splashOne}
					alt="splash of coffee"
					className="img-bg about-us__img-splash"
				/>
			</div>
			<div className="container">
				<div className="about-us__wrapper">
					<div className="about-us__offer">
						<h2 className="title about-us__title" data-title>
							Discover the best coffee
						</h2>
						<div className="about-us__description">
							Bean Scene is a coffee shop that provides you with
							quality coffee that helps boost your productivity
							and helps build your mood. Having a cup of coffee is
							good, but having a cup of real coffee is greater.
							There is no doubt that you will enjoy this coffee
							more than others you have ever tasted.
						</div>
						<a href="#" className="btn about-us__btn">
							Learn More
						</a>
					</div>
					<div className="about-us__wrapper-img">
						<img
							src={cup}
							alt="a mug made of grains"
							className="about-us__img"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
