import React from "react";
import "./cart.css";
import cart from "@assets/svg/cart.svg";

const Cart = () => {
	return (
		<section class="basket">
			<div class="container">
				<h1 class="title title-shopping">Корзина покупок</h1>
				<div class="basket__null">
					<div class="basket__text">Ваша корзина пуста</div>
					<img src={cart} alt="basket" class="basket__img" />
					<a href="index.html" class="btn btn-order">
						Заказать всё!
					</a>
				</div>
			</div>
		</section>
	);
};

export default Cart;
