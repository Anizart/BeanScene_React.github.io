import React from "react";
import "./menu.css";

const Menu = () => {
	return (
		<section className="section menu">
			<div className="container">
				<h2 className="title" data-title>
					Enjoy a new blend of coffee style
				</h2>
				<div className="menu__description">
					Explore all flavours of coffee with us. There is always a
					new cup worth experiencing
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
						<h3 className="menu__name">Cappuccino</h3>
						<div className="menu__weights">
							Coffee 50% | Milk 50%
						</div>
						<div className="menu__price">18.50</div>
						<a
							href="#"
							className="btn menu__btn"
							data-productId="1">
							Order now
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
						<h3 className="menu__name">Chai Latte</h3>
						<div className="menu__weights">
							Coffee 50% | Milk 50%
						</div>
						<div className="menu__price">28.50</div>
						<a
							href="#"
							className="btn menu__btn"
							data-productId="2">
							Order now
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
							Coffee 50% | Milk 50%
						</div>
						<div className="menu__price">38.50</div>
						<a
							href="#"
							className="btn menu__btn"
							data-productId="3">
							Order now
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
							Coffee 50% | Milk 50%
						</div>
						<div className="menu__price">48.50</div>
						<a
							href="#"
							className="btn menu__btn"
							data-productId="4">
							Order now
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
