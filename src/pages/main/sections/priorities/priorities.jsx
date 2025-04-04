import React from "react";
import "./priorities.css";
import splash from "@assets/spray.webp";
import card1 from "@assets/svg/section_4_card_1.svg";
import card2 from "@assets/svg/section_4_card_2.svg";
import card3 from "@assets/svg/section_4_card_3.svg";
import card4 from "@assets/svg/section_4_card_4.svg";

const Priorities = () => {
	return (
		<section className="section priorities">
			<div className="img-bg priorities__wrapper-img-splash">
				<img
					src={splash}
					alt="splash of coffee"
					className="img-bg priorities__img-splash"
				/>
			</div>
			<div className="container">
				<h2 className="title" data-title>
					Why are we different?
				</h2>
				<div className="priorities__description" data-description>
					We don’t just make your coffee, we make your day!
				</div>
				<div className="priorities__wrapper">
					<a href="#" className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card1}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								Supreme Beans
							</h3>
							<div className="priorities__text">
								Beans that provides great taste
							</div>
						</div>
					</a>
					<a href="#" className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card2}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								High Quality
							</h3>
							<div className="priorities__text">
								We provide the highest quality
							</div>
						</div>
					</a>
					<a href="#" className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card3}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								Extraordinary{" "}
							</h3>
							<div className="priorities__text">
								Coffee like you have never tasted
							</div>
						</div>
					</a>
					<a href="#" className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card4}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								Affordable Price
							</h3>
							<div className="priorities__text">
								Our Coffee prices are easy to afford
							</div>
						</div>
					</a>
				</div>
				<div className="priorities__description" data-description>
					Great ideas start with great coffee, Lets help you achieve
					that
				</div>
				<div className="subtitle priorities__subtitle">
					Get started today.
				</div>
				<a href="#" className="btn priorities__btn">
					Join Us
				</a>
			</div>
		</section>
	);
};

export default Priorities;
