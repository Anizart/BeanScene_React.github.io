import React from "react";
import "./signup.css";

const ModalSignUp = () => {
	return (
		<div class="modal" data-modal-signUp tabindex="-1">
			<form action="#" method="post" class="modal__wrapper">
				<div class="modal__text">
					Добро пожаловать! Ваше кофейное приключение начинается
					здесь.
				</div>
				<div class="modal__wrapper-input">
					<label for="name" class="modal__label">
						Ваше Имя
					</label>
					<input
						type="text"
						name="name"
						id="name"
						class="modal__input"
						tabindex="1"
						required
					/>
				</div>
				<div class="modal__wrapper-input">
					<label for="email" class="modal__label">
						Электронная почта
					</label>
					<input
						type="text"
						name="email"
						id="email"
						class="modal__input"
						tabindex="2"
						required
					/>
				</div>
				<div class="modal__wrapper-input">
					<label for="address" class="modal__label">
						Адрес
					</label>
					<input
						list="cities"
						type="text"
						name="address"
						id="address"
						class="modal__input"
						tabindex="3"
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
				<div class="modal__wrapper-input">
					<label for="password" class="modal__label">
						Пароль
					</label>
					<input
						type="text"
						name="password"
						id="password"
						class="modal__input"
						tabindex="4"
						required
					/>
				</div>
				<button
					type="submit"
					class="btn modal__btn"
					tabindex="5"
					data-btn-signUp>
					Отправить
				</button>
				<div class="modal__link" data-linkRegistration>
					Уже есть аккаунт?
				</div>
			</form>
		</div>
	);
};

export default ModalSignUp;
