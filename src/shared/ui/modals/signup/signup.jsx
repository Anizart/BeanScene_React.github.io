import React from "react";
import "./signup.css";

const ModalSignUp = ({ isSignUpOpen, setIsSignUpOpen, onSwitchToSignIn }) => {
	return (
		<div
			className={`modal ${isSignUpOpen ? "modal-area-active" : ""}`}
			onClick={() => setIsSignUpOpen(!isSignUpOpen)}
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
};

export default ModalSignUp;
