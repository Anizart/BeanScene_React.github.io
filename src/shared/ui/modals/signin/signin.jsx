import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { login } from "@/shared/api/auth";

const ModalSignIn = ({
	isSignInOpen,
	setIsSignInOpen,
	onSwitchToSignIn,
	setModalMessage,
}) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		//+ Проверка Email перед отправкой:
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
			const res = await login(formData);

			setModalMessage({
				isOpen: true,
				message: res.message,
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
				navigate("/office");
				window.location.reload();
			}, 3000);

			setIsSignInOpen(!isSignInOpen);
		} catch (err) {
			console.error("Ошибка авторизации (фронт)", err);
			setModalMessage({
				isOpen: true,
				message: err.message,
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);

			setIsSignInOpen(!isSignInOpen);
		}
	};

	if (!isSignInOpen) return null;

	const modalContent = (
		<div
			className={`modal ${isSignInOpen ? "modal-area-active" : ""}`}
			onClick={() => setIsSignInOpen(!isSignInOpen)}
			tabIndex="-1">
			<form
				action="#"
				method="post"
				className="modal__wrapper"
				onSubmit={handleSubmit}
				onClick={(e) => e.stopPropagation()}>
				<div className="modal__text">
					С возвращением! Лучшие моменты с кофе уже ждут вас.
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="emailSignIn" className="modal__label">
						Электронная почта
					</label>
					<input
						type="text"
						name="email"
						id="email-authorization"
						className="modal__input"
						onChange={handleChange}
						tabIndex="1"
						required
					/>
				</div>
				<div className="modal__wrapper-input">
					<label htmlFor="password-signIn" className="modal__label">
						Пароль
					</label>
					<input
						type="password"
						name="password"
						id="password-authorization"
						className="modal__input"
						onChange={handleChange}
						tabIndex="2"
						required
					/>
				</div>
				<button type="submit" className="btn modal__btn" tabIndex="3">
					Отправить
				</button>
				<button onClick={onSwitchToSignIn} className="modal__link">
					новая учетная запись
				</button>
			</form>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalSignIn;
