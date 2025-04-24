import React from "react";
import { createPortal } from "react-dom";

const ModalSearch = ({ isSearchOpen, setIsSearchOpen }) => {
	if (!isSearchOpen) return null;

	const modalContent = (
		<div
			className={`modal modal-search ${isSearchOpen ? "modal-area-active" : ""}`}
			onClick={() => setIsSearchOpen(!isSearchOpen)}>
			<form
				action="#"
				method="post"
				className="modal__wrapper"
				onClick={(e) => e.stopPropagation()}>
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

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalSearch;
