import React from "react";
import "./additives.css";

const ModalAdditives = () => {
	return (
		<div class="modal modal-additives" data-modal-additives>
			<div class="modal__wrapper modal__wrapper-additives">
				<div class="modal__text">Добавить в кофе</div>
				<div class="modal__wrapper-elements">
					<div class="modal__additives">
						<div class="modal__wrapper-img">
							<img
								src="img/coconut.png"
								alt="Кокос"
								class="modal__img"
							/>
						</div>
						<div class="modal__additives-text">Кокос</div>
						<button
							type="submit"
							class="btn modal__btn"
							tabindex="1"
							data-btn-add="1">
							добавить
						</button>
					</div>
					<div class="modal__additives">
						<div class="modal__wrapper-img">
							<img
								src="img/banana.png"
								alt="Банан"
								class="modal__img"
							/>
						</div>
						<div class="modal__additives-text">Банан</div>
						<button
							type="submit"
							class="btn modal__btn"
							tabindex="2"
							data-btn-add="2">
							добавить
						</button>
					</div>
					<div class="modal__additives">
						<div class="modal__wrapper-img">
							<img
								src="img/sugar.png"
								alt="Сахар"
								class="modal__img"
							/>
						</div>
						<div class="modal__additives-text">Сахар</div>
						<button
							type="submit"
							class="btn modal__btn"
							tabindex="2"
							data-btn-add="3">
							добавить
						</button>
					</div>
				</div>
				<div class="modal__wrapper-btn">
					<button
						type="submit"
						class="btn modal__btn-cancellation"
						tabindex="4"
						data-btn-cancellation>
						отмена
					</button>
					<button
						type="submit"
						class="btn modal__btn"
						tabindex="3"
						data-btn-done>
						готово
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalAdditives;
