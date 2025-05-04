import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";

import { regist } from "@/shared/api/auth";

const ModalSignUp = ({
	isSignUpOpen,
	setIsSignUpOpen,
	onSwitchToSignIn,
	setModalMessage,
}) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		address: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		//+ Проверка Email перед отправкой, с помощью регулярного выражения:
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			setModalMessage({
				isOpen: true,
				message: "Введите корректный email-адрес.",
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);

			return;
		}

		try {
			const data = await regist(formData);
			setModalMessage({
				isOpen: true,
				message: data.message || "Успешная регистрация!",
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
				navigate("/office");
				window.location.reload();
			}, 3000);

			setIsSignUpOpen(!isSignUpOpen);
		} catch (err) {
			console.error("Ошибка регистрации (фронт)", err);
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

	if (!isSignUpOpen) return null; // Если модалка закрыта — ничего не рендерю

	const modalContent = (
		<div
			className={`modal ${isSignUpOpen ? "modal-area-active" : ""}`}
			onClick={() => setIsSignUpOpen(!isSignUpOpen)}
			onSubmit={handleSubmit}
			tabIndex="-1">
			<form
				action="#"
				method="post"
				onClick={(e) => e.stopPropagation()}
				className="modal__wrapper">
				<div className="modal__text">
					Добро пожаловать! Ваше кофейное приключение начинается
					здесь.
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="name" className="modal__label">
						Ваше Имя
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="modal__input"
						onChange={handleChange}
						tabIndex="1"
						required
					/>
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="email" className="modal__label">
						Электронная почта
					</label>
					<input
						type="text"
						name="email"
						id="email"
						className="modal__input"
						onChange={handleChange}
						tabIndex="2"
						required
					/>
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="address" className="modal__label">
						Адрес
					</label>
					<input
						list="cities"
						type="text"
						name="address"
						id="address"
						className="modal__input"
						onChange={handleChange}
						tabIndex="3"
						required
					/>
					<datalist id="cities">
						<option>Москва</option>
						<option>Санкт-Петербург</option>
						<option>Челябинск</option>
						<option>Оренбург</option>
						<option>Ярославль</option>
						<option>Самара</option>
					</datalist>
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="password" className="modal__label">
						Пароль
					</label>
					<input
						type="text"
						name="password"
						id="password"
						className="modal__input"
						onChange={handleChange}
						tabIndex="4"
						required
					/>
				</div>
				<button type="submit" className="btn modal__btn" tabIndex="5">
					Отправить
				</button>
				<button
					type="button"
					onClick={onSwitchToSignIn}
					className="modal__link">
					Уже есть аккаунт?
				</button>
			</form>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalSignUp;
