import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./cart.css";

import cart from "@assets/svg/cart.svg";
import Cards from "./cards/cards";
import { getBasket } from "@/shared/api/cart";

const Cart = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const wrapper = document.querySelector(".wrapper");
		if (wrapper) wrapper.classList.add("flex-layout");

		return () => {
			if (wrapper) wrapper.classList.remove("flex-layout");
		};
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const data = await getBasket();
				console.log("Basket data:", data);

				// Проверка данных и отфильтровываем недостающие объекты
				const validData = data.filter(
					(item) =>
						item &&
						item.product &&
						item.product.id &&
						item.product.name &&
						item.product.price,
				);

				setProducts(validData);
			} catch (err) {
				console.error("Ошибка при загрузке корзины", err);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<section className="basket">
			<div className="container">
				<h1 className="title title-shopping">Корзина покупок</h1>
				{isLoading ? (
					<p>Загрузка...</p>
				) : products.length === 0 ? (
					<Empty />
				) : (
					<Cards
						products={products.map(
							({ product, flavor_additive }) => ({
								id: `${product.id}-${flavor_additive || "none"}`,
								name: product.name || "Без названия",
								description: `Добавки: ${flavor_additive || "Нет"}`,
								price: product.price || 0,
								img: product.img || "default.jpg",
							}),
						)}
					/>
				)}
			</div>
		</section>
	);
};

export default Cart;

// Компонент пустой корзины
const Empty = () => {
	return (
		<div className="basket__null">
			<div className="basket__text">Ваша корзина пуста</div>
			<img src={cart} alt="basket" className="basket__img" />
			<Link to="/" className="btn btn-order">
				За заказами!
			</Link>
		</div>
	);
};
