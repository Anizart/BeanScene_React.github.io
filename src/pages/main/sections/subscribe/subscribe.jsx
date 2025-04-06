import React from "react";
import "./subscribe.css";
import bg from "@assets/bg_coffee.webp";

const Subscribe = () => {
	return (
		<section className="subscribe">
			<div className="subscribe__wrapper-img-bg">
				<img src={bg} alt="background" className="subscribe__img-bg" />
			</div>
			<div className="container">
				<div className="subscribe__wrapper">
					<h2 className="title">
						Подпишитесь, чтобы получать последние новости
					</h2>
					<div className="subscribe__description">
						Не пропустите наши новинки, обновления, советы и
						специальные предложения
					</div>
					<form type="post" action="#" className="subscribe__form">
						<input
							type="email"
							name="email"
							className="subscribe__input"
							placeholder="Введите электронную почту"
							tabIndex="6"
							required
						/>
						<button className="subscribe__btn" tabIndex="7">
							Подписаться
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
