import React from "react";
import "./search.css";

const ModalSearch = ({ isSearchOpen, setIsSearchOpen }) => {
	return (
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
};

export default ModalSearch;
