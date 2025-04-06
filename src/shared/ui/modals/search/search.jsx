import React from "react";
import "./search.css";

const ModalSearch = () => {
	return (
		<div class="modal modal-search" data-modal-search>
			<form action="#" method="post" class="modal__wrapper">
				<div class="modal__text">Что вы хотите сегодня?</div>
				<input
					type="text"
					name="email-signIn"
					id="search"
					class="modal__input"
					placeholder="Название продукта..."
					tabindex="1"
					required
				/>
				<div class="modal-search__wrapper-products"></div>
			</form>
		</div>
	);
};

export default ModalSearch;
