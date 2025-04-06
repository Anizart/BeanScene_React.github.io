import React from "react";
import "./about-us.css";
import splashOne from "@assets/spray.webp";
import cup from "@assets/section_2_cup.png";

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
							Откройте для себя лучший кофе
						</h2>
						<div className="about-us__description">
							Bean Scene — это кофейня, которая предлагает
							качественный кофе, помогающий повысить
							продуктивность и поднять настроение. Выпить чашку
							кофе — это хорошо, но настоящая чашка кофе — это
							нечто большее. Без сомнений, вы насладитесь этим
							кофе больше, чем любым другим, который пробовали
							ранее.
						</div>
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
	);
};

export default AboutUs;
