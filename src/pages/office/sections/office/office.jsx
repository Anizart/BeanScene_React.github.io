import React from "react";
import "./office.css";

const Office = () => {
	return (
		<section class="office">
			<div class="container">
				<h1 class="title office__title">Личный кабинет</h1>
				<div class="office__profile-info">
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
				<div class="office__wrapper-btn">
					<button type="button" class="btn btn-edit">
						Редактировать профиль
					</button>
					<button type="button" class="btn btn-exit">
						Выйти
					</button>
				</div>
			</div>
		</section>
	);
};

export default Office;
