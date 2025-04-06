import React from "react";
import "./signin.css";

const ModalSignIn = () => {
	return (
		<div class="modal" data-modal-signIn tabindex="-1">
			<form action="#" method="post" class="modal__wrapper">
				<div class="modal__text">
					С возвращением! Лучшие моменты с кофе уже ждут вас.
				</div>
				<div class="modal__wrapper-input">
					<label for="email-authorization" class="modal__label">
						Электронная почта
					</label>
					<input
						type="text"
						name="email-signIn"
						id="email-authorization"
						class="modal__input"
						tabindex="1"
						required
					/>
				</div>
				<div class="modal__wrapper-input">
					<label for="password-authorization" class="modal__label">
						Пароль
					</label>
					<input
						type="text"
						name="password-signIn"
						id="password-authorization"
						class="modal__input"
						tabindex="2"
						required
					/>
				</div>
				<button
					type="submit"
					class="btn modal__btn"
					tabindex="3"
					data-btn-signIn>
					Отправить
				</button>
				<div class="modal__wrapper-link">
					<div class="modal__link" data-linkAuthorization>
						новая учетная запись
					</div>
					<div class="modal__link">забыли пароль?</div>
				</div>
			</form>
		</div>
	);
};

export default ModalSignIn;
