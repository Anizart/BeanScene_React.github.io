import React, { useState, useEffect } from "react";
import { API_URL } from "@/shared/api/products";
import "./office.css";

const Office = ({
	isСonfirmation,
	isModalEdit,
	setIsСonfirmation,
	setIsModalEdit,
}) => {
	const [userData, setUserData] = useState({
		name: "Загрузка...",
		email: "Загрузка...",
		address: "Загрузка...",
		points: "Загрузка...",
	});

	useEffect(() => {
		const wrapper = document.querySelector(".wrapper");
		if (wrapper) wrapper.classList.add("flex-layout");

		return () => {
			if (wrapper) wrapper.classList.remove("flex-layout");
		};
	}, []);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const res = await fetch(`${API_URL}user`, {
					method: "GET",
					credentials: "include",
				});

				if (!res.ok) return;

				const data = await res.json();
				setUserData({
					name: data.name,
					email: data.email,
					address: data.address,
					bonuses: data.bonuses,
				});
			} catch (err) {
				console.error("Ошибка при получении данных пользователя:", err);
			}
		};

		fetchUserData();
	}, []);

	return (
		<section className="office">
			<div className="container">
				<h1 className="title office__title">Личный кабинет</h1>
				<div className="d-flex justify-content-between">
					<div className="office__profile-info">
						<p className="office__text">
							<strong>Ваше Имя:</strong> {userData.name}
						</p>
						<p className="office__text">
							<strong>Электронная почта:</strong> {userData.email}
						</p>
						<p className="office__text">
							<strong>Адрес:</strong> {userData.address}
						</p>
					</div>
					<div>
						<p className="office__text">
							<strong>Баллы: </strong> {userData.bonuses}
						</p>
					</div>
				</div>
				<div className="office__wrapper-btn">
					<button
						type="button"
						className="btn btn-edit"
						onClick={() => setIsModalEdit(!isModalEdit)}>
						Редактировать профиль
					</button>
					<button
						type="button"
						className="btn btn-exit"
						onClick={() => setIsСonfirmation(!isСonfirmation)}>
						Выйти
					</button>
				</div>
			</div>
		</section>
	);
};

export default Office;
