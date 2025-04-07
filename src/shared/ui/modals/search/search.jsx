import React from "react";
import "./search.css";

const ModalSearch = () => {
	return (
		<div className="modal modal-search">
			<form action="#" method="post" className="modal__wrapper">
				<div className="modal__text">Что вы хотите сегодня?</div>
				<input
					type="text"
					name="email-signIn"
					id="search"
					className="modal__input"
					placeholder="Название продукта..."
					tabIndex="1"
					required
				/>
				<div className="modal-search__wrapper-products"></div>
			</form>
		</div>
	);
};

export default ModalSearch;
