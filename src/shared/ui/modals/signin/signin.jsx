import React from "react";
import "./signin.css";

const ModalSignIn = ({ isSignInOpen, setIsSignInOpen, onSwitchToSignIn }) => {
	return (
		<div
			className={`modal ${isSignInOpen ? "modal-area-active" : ""}`}
			onClick={() => setIsSignInOpen(!isSignInOpen)}
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
						name="emailSignIn"
						id="email-authorization"
						className="modal__input"
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
						name="password-signIn"
						id="password-authorization"
						className="modal__input"
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
};

export default ModalSignIn;
