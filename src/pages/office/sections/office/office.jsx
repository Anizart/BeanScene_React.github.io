import React, { useEffect } from "react";
import "./office.css";

const Office = () => {
	useEffect(() => {
		const wrapper = document.querySelector(".wrapper");
		if (wrapper) wrapper.classList.add("flex-layout");

		return () => {
			if (wrapper) wrapper.classList.remove("flex-layout");
		};
	}, []);

	return (
		<section className="office">
			<div className="container">
				<h1 className="title office__title">Личный кабинет</h1>
				<div className="d-flex justify-content-between">
					<div className="office__profile-info">
						<p className="office__text">
							<strong>Ваше Имя:</strong> Error
						</p>
						<p className="office__text">
							<strong>Электронная почта:</strong> Error
						</p>
						<p className="office__text">
							<strong>Адрес:</strong> Error
						</p>
					</div>
					<div>
						<p className="office__text">
							<strong>Баллы: </strong> Error
						</p>
					</div>
				</div>
				<div className="office__wrapper-btn">
					<button type="button" className="btn btn-edit">
						Редактировать профиль
					</button>
					<button type="button" className="btn btn-exit">
						Выйти
					</button>
				</div>
			</div>
		</section>
	);
};

export default Office;
