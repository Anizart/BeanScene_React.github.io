import React from "react";
import "./response.css";
import MenuSlider from "./response-cards";
import splash from "@assets/spray.webp";

const Response = () => {
	return (
		<section className="section response">
			<div className="img-bg response__wrapper-img-splash-up">
				<img
					src={splash}
					alt="splash of coffee"
					className="response__img-splash-t"
				/>
			</div>
			<div className="img-bg response__wrapper-img-splash-bottom">
				<img
					src={splash}
					alt="splash of coffee"
					className="response__img-splash"
				/>
			</div>
			<div className="container">
				<h2 className="title" data-title>
					Our coffee perfection feedback
				</h2>
				<div className="response__description">
					Our customers have amazing things to say about us
				</div>
				<div className="response__wrapper-sw">
					<MenuSlider />
					<div className="response__wrapper-btn">
						<div className="response__rewind-left"></div>
						<div className="response__rewind-right"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Response;
