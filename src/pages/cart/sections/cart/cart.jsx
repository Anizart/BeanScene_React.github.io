import React from "react";
import "./cart.css";
import cart from "@assets/svg/cart.svg";
import { Link } from "react-router";

const Cart = () => {
	return (
		<section className="basket">
			<div className="container">
				<h1 className="title title-shopping">Корзина покупок</h1>
				<div className="basket__null">
					<div className="basket__text">Ваша корзина пуста</div>
					<img src={cart} alt="basket" className="basket__img" />
					<Link to="/" className="btn btn-order">
						Заказать всё!
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Cart;
