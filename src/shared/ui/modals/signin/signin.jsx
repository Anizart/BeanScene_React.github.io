import React from "react";
import "./signin.css";

const ModalSignIn = () => {
	return (
		<div className="modal" data-modal-signIn tabindex="-1">
			<form action="#" method="post" className="modal__wrapper">
				<div className="modal__text">
					С возвращением! Лучшие моменты с кофе уже ждут вас.
				</div>
				<div className="modal__wrapper-input">
					<label for="email-authorization" className="modal__label">
						Электронная почта
					</label>
					<input
						type="text"
						name="email-signIn"
						id="email-authorization"
						className="modal__input"
						tabIndex="1"
						required
					/>
				</div>
				<div className="modal__wrapper-input">
					<label
						for="password-authorization"
						className="modal__label">
						Пароль
					</label>
					<input
						type="text"
						name="password-signIn"
						id="password-authorization"
						className="modal__input"
						tabIndex="2"
						required
					/>
				</div>
				<button
					type="submit"
					className="btn modal__btn"
					tabindex="3"
					data-btn-signIn>
					Отправить
				</button>
				<div className="modal__wrapper-link">
					<div className="modal__link">новая учетная запись</div>
					<div className="modal__link">забыли пароль?</div>
				</div>
			</form>
		</div>
	);
};

export default ModalSignIn;
