import React, { useEffect, useState } from "react";
import "./menu.css";

import MenuCard from "../../components/menu-card/menu-card";
import img from "@assets/be-over.png";
import { getProducts } from "@/shared/api/products";

const Menu = ({ isSignInOpen, setIsSignInOpen }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then(setProducts);
	}, []); // [] то есть не следи ни зачем, а сработай 1 раз при рендере

	return (
		<section className="section menu" id="menu">
			<div className="container">
				<h2 className="title">Откройте для себя новый стиль кофе</h2>
				<div className="menu__description">
					Исследуйте все вкусы кофе вместе с нами. Всегда найдётся
					новая чашка, которую стоит попробовать.
				</div>
				<div className="menu__wrapper">
					{products.length > 0 ? (
						<MenuCard
							products={products}
							isSignInOpen={isSignInOpen}
							setIsSignInOpen={setIsSignInOpen}
						/>
					) : (
						<Empty />
					)}
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
