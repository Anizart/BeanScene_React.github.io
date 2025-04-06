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
					Почему мы особенные?
				</h2>
				<div className="priorities__description" data-description>
					Мы не просто готовим кофе — мы делаем ваш день лучше!
				</div>
				<div className="priorities__wrapper">
					<div className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card1}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								Отборные зёрна
							</h3>
							<div className="priorities__text">
								Зёрна, которые дарят насыщенный вкус
							</div>
						</div>
					</div>
					<div className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card2}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								Высокое качество
							</h3>
							<div className="priorities__text">
								Мы предлагаем только наивысшее качество
							</div>
						</div>
					</div>
					<div className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card3}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								Неповторимый вкус
							</h3>
							<div className="priorities__text">
								Кофе, которого вы ещё не пробовали
							</div>
						</div>
					</div>
					<div className="priorities__card">
						<div className="priorities__wrapper-img">
							<img
								src={card4}
								alt="icon"
								className="priorities__img"
							/>
							<h3 className="priorities__priority">
								Доступные цены
							</h3>
							<div className="priorities__text">
								Наш кофе по приятной цене
							</div>
						</div>
					</div>
				</div>
				<div className="priorities__description" data-description>
					Великие идеи начинаются с отличного кофе — мы поможем вам в
					этом
				</div>
				<div className="subtitle priorities__subtitle">
					Начните уже сегодня.
				</div>
				<a href="#" className="btn priorities__btn">
					Присоединиться
				</a>
			</div>
		</section>
	);
};

export default Priorities;
