import React from "react";
import "./message.css";

const ModalMessage = () => {
	return (
		<div class="modal modal-message" style="z-index: 0;" data-modal-order>
			<div class="modal__wrapper modal__wrapper-border">
				<div class="modal__text"></div>
			</div>
		</div>
	);
};

export default ModalMessage;
