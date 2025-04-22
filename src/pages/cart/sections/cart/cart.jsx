import React from "react";
import { useEffect } from "react";
import "./cart.css";
import cart from "@assets/svg/cart.svg";
import Cards from "./cards/cards";
import { Link } from "react-router";

const Cart = () => {
	useEffect(() => {
		const wrapper = document.querySelector(".wrapper");
		if (wrapper) wrapper.classList.add("flex-layout");

		return () => {
			if (wrapper) wrapper.classList.remove("flex-layout");
		};
	}, []);

	return (
		<section className="basket">
			<div className="container">
				<Empty />
				{/* ...логика... */}
			</div>
		</section>
	);
};

export default Cart;

//+ Локальные rendering components:
const Empty = () => {
	return (
		<>
			<h1 className="title title-shopping">Корзина покупок</h1>
			<div className="basket__null">
				<div className="basket__text">Ваша корзина пуста</div>
				<img src={cart} alt="basket" className="basket__img" />
				<Link to="/" className="btn btn-order">
					За заказами!
				</Link>
			</div>
		</>
	);
};

const CardWithdrawal = () => {
	return <Cards />;
};
