import { useState } from "react";
import { createPortal } from "react-dom";

import { updateUserProfile } from "@/shared/api/user";

const ModalEdit = ({ isModalEdit, setIsModalEdit }) => {
	const [formData, setFormData] = useState({
		name: "",
		address: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await updateUserProfile(formData);
			alert("Профиль обновлён!");
			window.location.reload(); // Обновление страницы
			setIsModalEdit(false);
		} catch (error) {
			console.error("Ошибка:", error);
			alert("Не удалось обновить профиль.");
		}
	};

	if (!isModalEdit) return null;

	const modalContent = (
		<div
			className={`modal ${isModalEdit ? "modal-area-active" : ""}`}
			onClick={() => setIsModalEdit(!isModalEdit)}>
			<form
				className="modal__wrapper"
				onSubmit={handleSubmit}
				onClick={(e) => e.stopPropagation()}>
				<div className="modal__text">Редактирование профиля:</div>
				<div className="modal__wrapper-input">
					<label htmlFor="neme" className="modal__label">
						Имя
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						id="name"
						className="modal__input"
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
						value={formData.address}
						onChange={handleChange}
						id="address"
						className="modal__input"
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
						value={formData.password}
						onChange={handleChange}
						id="password"
						className="modal__input"
						required
					/>
				</div>
				<button type="submit" className="btn modal__btn">
					Готово
				</button>
			</form>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};

export default ModalEdit;
