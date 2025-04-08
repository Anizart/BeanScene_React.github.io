import React from "react";
import "./menu.css";

const Menu = () => {
	return (
		<section className="section menu" id="menu">
			<div className="container">
				<h2 className="title">Откройте для себя новый стиль кофе</h2>
				<div className="menu__description">
					Исследуйте все вкусы кофе вместе с нами. Всегда найдётся
					новая чашка, которую стоит попробовать.
				</div>
				<div className="menu__wrapper owl-carousel menu__owl-carousel">
					<div className="menu__card">
						<div className="menu__wrapper-img">
							<img
								src="img/section_3_card_1.webp"
								alt="coffee card"
								className="menu__img"
							/>
						</div>
						<h3 className="menu__name">Капучино</h3>
						<div className="menu__weights">
							Кофе 50% | Молоко 50%
						</div>
						<div className="menu__price">18.50</div>
						<a href="#" className="btn menu__btn">
							Заказать
						</a>
					</div>
					<div className="menu__card">
						<div className="menu__wrapper-img">
							<img
								src="img/section_3_card_2.webp"
								alt="coffee card"
								className="menu__img"
							/>
						</div>
						<h3 className="menu__name">Чай Латте</h3>
						<div className="menu__weights">
							Кофе 50% | Молоко 50%
						</div>
						<div className="menu__price">28.50</div>
						<a href="#" className="btn menu__btn">
							Заказать
						</a>
					</div>
					<div className="menu__card">
						<div className="menu__wrapper-img">
							<img
								src="img/section_3_card_3.webp"
								alt="coffee card"
								className="menu__img"
							/>
						</div>
						<h3 className="menu__name">Macchiato</h3>
						<div className="menu__weights">
							Кофе 50% | Молоко 50%
						</div>
						<div className="menu__price">38.50</div>
						<a href="#" className="btn menu__btn">
							Заказать
						</a>
					</div>
					<div className="menu__card">
						<div className="menu__wrapper-img">
							<img
								src="img/section_3_card_4.webp"
								alt="coffee card"
								className="menu__img"
							/>
						</div>
						<h3 className="menu__name">Expresso</h3>
						<div className="menu__weights">
							Кофе 50% | Молоко 50%
						</div>
						<div className="menu__price">48.50</div>
						<a href="#" className="btn menu__btn">
							Заказать
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
