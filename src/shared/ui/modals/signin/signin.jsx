import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { login } from "@/shared/api/auth";

const ModalSignIn = ({ isSignInOpen, setIsSignInOpen, onSwitchToSignIn }) => {
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
		try {
			const res = await login(formData);
			//! модалка
			console.log(res);
			navigate("/office");
			setIsSignInOpen(!isSignInOpen);
		} catch (err) {
			console.error("Ошибка авторизации (фронт)", err);
			//! модалка
		}
	};

	if (!isSignInOpen) return null;

	const modalContent = (
		<div
			className={`modal ${isSignInOpen ? "modal-area-active" : ""}`}
			onClick={() => setIsSignInOpen(!isSignInOpen)}
			onSubmit={handleSubmit}
			tabIndex="-1">
			<form
				action="#"
				method="post"
				className="modal__wrapper"
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
						type="text"
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
				<div className="modal__wrapper-link">
					<button onClick={onSwitchToSignIn} className="modal__link">
						новая учетная запись
					</button>
					<button className="modal__link">забыли пароль?</button>
				</div>
			</form>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalSignIn;
