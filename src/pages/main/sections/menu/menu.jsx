import React from "react";
import "./menu.css";
import Cards from "./menu-cards/menu-cards";
import img from "@assets/be-over.png";

const Menu = () => {
	return (
		<section className="section menu" id="menu">
			<div className="container">
				<h2 className="title">Откройте для себя новый стиль кофе</h2>
				<div className="menu__description">
					Исследуйте все вкусы кофе вместе с нами. Всегда найдётся
					новая чашка, которую стоит попробовать.
				</div>
				<div className="menu__wrapper">
					<Empty />
				</div>
			</div>
		</section>
	);
};

export default Menu;

//+ Локальные rendering components:
const Empty = () => {
	return (
		<div>
			<img src={img} alert="кофе закончилось" />
			<p>Сейчас закончилось, но скоро появится</p>
		</div>
	);
};

const CardWithdrawal = () => {
	return <Cards />;
};
