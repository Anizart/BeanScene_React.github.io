import React from "react";
import "./chance.css";
import bg from "@assets/bg_coffee.webp";
import grains from "@assets/section_5_grains.webp";
import cup from "@assets/section_5_cup.webp";

const Chance = () => {
	return (
		<section className="section chance">
			<div className="chance__wrapper-img-bg">
				<img src={bg} alt="background" className="chance__img-bg" />
			</div>
			<div className="chance__wrapper-img-grains">
				<img src={grains} alt="grains" className="chance__img-grains" />
			</div>
			<div className="container">
				<div className="chance__wrapper">
					<div className="chance__offer col-md-5 col-lg-6">
						<h2 className="title chance__title title-light ignore-dark-theme">
							Получите шанс начать утро великолепно
						</h2>
						<div className="chance__description">
							Мы дарим вам уникальную возможность
							<br />
							почувствовать вкус жизни вместе с кофе.
						</div>
						<a href="#menu" className="btn chance__btn">
							Заказать сейчас
						</a>
					</div>
					<div className="chance__wrapper-img">
						<img
							src={cup}
							alt="a cup of coffee"
							className="chance__img"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Chance;
