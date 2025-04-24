import React from "react";
import { createPortal } from "react-dom";
import "./message.css";

const ModalMessage = ({ isOpen, message, isModalMessage }) => {
	if (!isOpen) return null;

	const modalContent = (
		<div
			className={`modal modal-message ${isModalMessage ? "modal-area-active" : ""}`}>
			<div className="modal__wrapper modal__wrapper-border">
				<div className="modal__text">{message}</div>
			</div>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalMessage;
