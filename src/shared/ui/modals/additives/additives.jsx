import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./additives.css";

import { addToBasket } from "@/shared/api/cart";
import coconut from "@/assets/coconut.png";
import banana from "@/assets/banana.png";
import sugar from "@/assets/sugar.png";

const additivesList = [
	{ name: "Кокос", img: `${coconut}` },
	{ name: "Банан", img: `${banana}` },
	{ name: "Сахар", img: `${sugar}` },
];

const ModalAdditives = ({
	productId,
	isModalAdditives,
	setIsModalAdditives,
	setModalMessage,
}) => {
	const [selectedAdditives, setSelectedAdditives] = useState([]);

	if (!isModalAdditives) return null;

	const toggleAdditive = (additive) => {
		setSelectedAdditives((prev) =>
			prev.includes(additive)
				? prev.filter((item) => item !== additive)
				: [...prev, additive],
		);
	};

	const handleSubmit = async () => {
		try {
			const additivesStr =
				selectedAdditives.length > 0
					? selectedAdditives.join(", ")
					: "Без добавок";

			const res = await addToBasket(productId, additivesStr);

			const data = await res.json();

			setModalMessage({
				isOpen: true,
				message: data.message,
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);

			setIsModalAdditives(!isModalAdditives);
		} catch (err) {
			console.error("Ошибка при отправке заказа:", err);
			setModalMessage({
				isOpen: true,
				message:
					err.message ||
					"Ошибка регистрации. Пожалуйста, попробуйте снова.",
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);
		}
	};

	const modalContent = (
		<div
			className={`modal modal-additives ${isModalAdditives ? "modal-area-active" : ""}`}
			onClick={() => setIsModalAdditives(!isModalAdditives)}>
			<div
				className="modal__wrapper modal__wrapper-additives"
				onClick={(e) => e.stopPropagation()}>
				<div className="modal__text">Добавить в кофе</div>
				<div className="modal__wrapper-elements">
					{additivesList.map(({ name, img }) => (
						<div
							key={name}
							className={`modal__additives ${
								selectedAdditives.includes(name)
									? "selected"
									: ""
							}`}
							onClick={() => toggleAdditive(name)}>
							<div className="modal__wrapper-img">
								<img
									src={img}
									alt={name}
									className="modal__img"
								/>
							</div>
							<div className="modal__additives-text">{name}</div>
							<button type="button" className="btn modal__btn">
								{selectedAdditives.includes(name)
									? "Убрать"
									: "Добавить"}
							</button>
						</div>
					))}
				</div>
				<div className="modal__wrapper-btn">
					<button
						type="submit"
						className="btn modal__btn-cancellation"
						onClick={() => setIsModalAdditives(!isModalAdditives)}>
						Отмена
					</button>
					<button
						type="submit"
						className="btn modal__btn"
						onClick={handleSubmit}>
						Заказать
					</button>
				</div>
			</div>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalAdditives;
