import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./search.css";

import { searchProducts } from "@/shared/api/products";
import { checkAuth } from "@/shared/api/auth";
import ModalAdditives from "../additives/additives";

const ModalSearch = ({
	isSearchOpen,
	isSignInOpen,
	setIsSearchOpen,
	setIsSignInOpen,
	setModalMessage,
}) => {
	const [query, setQuery] = useState("");
	const [products, setProducts] = useState([]);
	const [isModalAdditives, setIsModalAdditives] = useState(false);
	const [selectedProductId, setSelectedProductId] = useState(null);

	useEffect(() => {
		const delayDebounce = setTimeout(async () => {
			if (query.trim() !== "") {
				const results = await searchProducts(query);
				setProducts(results);
			} else {
				setProducts([]);
			}
		}, 500); // 0.5 секунды ожидания после ввода пользователя

		return () => clearTimeout(delayDebounce);
	}, [query]);

	if (!isSearchOpen) return null;

	const handleOrder = async (productId) => {
		try {
			const user = await checkAuth();

			if (!user) {
				console.log("Пользователь не авторизован");

				if (typeof setIsSignInOpen === "function") {
					setIsSignInOpen(!isSignInOpen);
				}

				return;
			}

			setSelectedProductId(productId);
			setIsModalAdditives(true);
		} catch (error) {
			console.error("Ошибка при открытии модального окна:", error);
		}
	};

	const modalContent = (
		<>
			<div
				className={`modal modal-search ${isSearchOpen ? "modal-area-active" : ""}`}
				onClick={() => setIsSearchOpen(!isSearchOpen)}>
				<form
					action="#"
					method="post"
					className="modal__wrapper"
					onClick={(e) => e.stopPropagation()}>
					<div className="modal__text">Что вы хотите сегодня?</div>
					<input
						type="text"
						name="email-signIn"
						id="search"
						className="modal__input"
						placeholder="Название продукта..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						required
					/>
					<div className="modal-search__wrapper-products">
						{products.length > 0 ? (
							<div className="modal-search__cards">
								{products.map((product) => (
									<div
										key={product.id}
										className="modal-search__card">
										<img
											src={`http://api.bean-scene.tw1.su/${product.img}`}
											alt={product.name}
											className="modal-search__wrapper-img"
										/>
										<div className="modal-search__name">
											{product.name}
										</div>
										<div className="modal-search__price">
											{product.price} ₽
										</div>
										<button
											type="button"
											className="btn modal-search__btn"
											onClick={() =>
												handleOrder(product.id)
											}>
											Заказать
										</button>
									</div>
								))}
							</div>
						) : (
							query.trim() && (
								<div className="modal-search__no-results">
									Ничего не найдено
								</div>
							)
						)}
					</div>
				</form>
			</div>

			<ModalAdditives
				productId={selectedProductId}
				isModalAdditives={isModalAdditives}
				setIsModalAdditives={setIsModalAdditives}
				setModalMessage={setModalMessage}
			/>
		</>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalSearch;
