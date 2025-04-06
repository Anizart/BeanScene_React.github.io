import React from "react";
import bg from "@assets/section_welcome.webp";
import "./welcome.css";

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
							Начните утро с глотка лучшего кофе
						</h2>
						<h1 className="welcome__title">Coffee</h1>
						<div className="welcome__descript">
							Лучше всего начать день с чашки кофе. Откройте для
							себя лучшие вкусы кофе, которые вы когда-либо
							пробовали. Мы предлагаем только самое лучшее, чтобы
							ваш день начинался с бодрости и хорошего настроения.
						</div>
						<a href="#menu" className="btn welcome__btn">
							Заказать сейчас
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
