import React, { useState } from "react";
import { createPortal } from "react-dom";

import { createOrders } from "@/shared/api/orders";

const ModalCorrection = ({
	isModalCorrection,
	setIsModalCorrection,
	products,
}) => {
	const [time, setTime] = useState("");
	const [payment, setPayment] = useState({
		number: "",
		year: "",
		cvc: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPayment((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!time || products.length === 0) {
			alert("Заполните время и убедитесь, что корзина не пуста.");
			return;
		}

		const ordersData = {
			time,
			products: products.map((p) => ({
				id_product: p.id,
				additives: p.additives,
			})),
		};

		try {
			const response = await createOrders(ordersData);
			alert(response.message || "Заказы успешно созданы!");

			setIsModalCorrection(false);
			// window.location.reload();
		} catch (err) {
			console.error("Ошибка при создании заказа:", err);
			alert("Ошибка при создании заказа.");
		}
	};

	if (!isModalCorrection) return null; // Если модалка закрыта — ничего не рендерю

	const modalContent = (
		<div
			className={`modal ${isModalCorrection ? "modal-area-active" : ""}`}
			onClick={() => setIsModalCorrection(!isModalCorrection)}
			onSubmit={handleSubmit}
			tabIndex="-1">
			<form
				action="#"
				method="post"
				onClick={(e) => e.stopPropagation()}
				className="modal__wrapper">
				<div className="modal__text">
					Финальный штрих — и кофе будет Вашим
				</div>
				<div className="modal__text">Сумма к оплате: </div>
				<div className="modal__wrapper-input">
					<label htmlFor="time" className="modal__label">
						Во сколько заберёте кофе?
					</label>
					<input
						type="time"
						name="time"
						id="time"
						className="modal__input"
						onChange={(e) => setTime(e.target.value)}
						required
					/>
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="number" className="modal__label">
						Номер карты
					</label>
					<input
						type="text"
						name="number"
						id="number"
						className="modal__input"
						value={payment.number}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="year" className="modal__label">
						месяц/год
					</label>
					<input
						type="text"
						name="year"
						id="year"
						className="modal__input"
						value={payment.year}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="cvc" className="modal__label">
						CVC/CVV
					</label>
					<input
						type="text"
						name="cvc"
						id="cvc"
						className="modal__input"
						value={payment.cvc}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="modal__wrapper-btn">
					<button
						type="submit"
						className="btn modal__btn-cancellation"
						onClick={() =>
							setIsModalCorrection(!isModalCorrection)
						}>
						Отмена
					</button>
					<button type="submit" className="btn modal__btn">
						Оплатить
					</button>
				</div>
			</form>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalCorrection;
