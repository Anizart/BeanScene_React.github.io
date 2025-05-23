import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./cart.css";

import cart from "@assets/svg/cart.svg";
import Cards from "./cards/cards";
import { getBasket, removeFromBasket } from "@/shared/api/cart";

const Cart = ({
	isModalCorrection,
	cartProducts,
	setIsModalCorrection,
	setCartProducts,
}) => {
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

				setCartProducts(validData);
			} catch (err) {
				console.error("Ошибка при загрузке корзины", err);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	//+ Обработчик удаления товара:
	const handleRemoveFromBasket = async (basketId) => {
		try {
			await removeFromBasket(basketId);
			window.location.reload();
		} catch (err) {
			console.error("Ошибка при удалении товара:", err);
		}
	};

	return (
		<section className="basket">
			<div className="container">
				<h1 className="title title-shopping">Корзина покупок</h1>
				{isLoading ? (
					<p>Загрузка...</p>
				) : cartProducts.length === 0 ? (
					<Empty />
				) : (
					<>
						<button
							type="button"
							className="btn btn-all"
							onClick={() =>
								setIsModalCorrection(!isModalCorrection)
							}>
							Оплатить всё
						</button>
						<Cards
							products={cartProducts.map(
								({ id, product, additives }) => ({
									id: `${id}`, // это уникальный id записи корзины
									name: product.name || "Без названия",
									description: product.description || "Нет",
									additives: additives || "Нет",
									price: product.price || 0,
									img: product.img || "default.jpg",
								}),
							)}
							onRemove={handleRemoveFromBasket}
						/>
					</>
				)}
			</div>
		</section>
	);
};

export default Cart;

//+ Компонент пустой корзины:
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
