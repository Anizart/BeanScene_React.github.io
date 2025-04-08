import React from "react";
import "./office.css";

const Office = () => {
	return (
		<section className="office">
			<div className="container">
				<h1 className="title office__title">Личный кабинет</h1>
				<div className="office__profile-info">
					<p>
						<strong>Ваше Имя:</strong> Error
					</p>
					<p>
						<strong>Электронная почта:</strong> Error
					</p>
					<p>
						<strong>Адрес:</strong> Error
					</p>
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
