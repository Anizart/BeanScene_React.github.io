import React, { useState } from "react";
import "./subscribe.css";

import bg from "@assets/bg_coffee.webp";
import { subscribeEmail } from "@/shared/api/subscribe";

const Subscribe = ({ setModalMessage }) => {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			setModalMessage({
				isOpen: true,
				message: "Введите корректный email-адрес.",
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);

			return;
		}

		try {
			const data = await subscribeEmail(email);
			setModalMessage({
				isOpen: true,
				message: data.message,
			});

			setEmail(""); // Очистка поля email

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);
		} catch (err) {
			console.error("Произошла ошибка при подписке:", err);
			setModalMessage({
				isOpen: true,
				message: err.message,
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);
		}
	};

	return (
		<section className="subscribe">
			<div className="subscribe__wrapper-img-bg">
				<img src={bg} alt="background" className="subscribe__img-bg" />
			</div>
			<div className="container">
				<div className="subscribe__wrapper">
					<h2 className="title ignore-dark-theme">
						Подпишитесь, чтобы получать последние новости
					</h2>
					<div className="subscribe__description">
						Не пропустите наши новинки, обновления, советы и
						специальные предложения
					</div>
					<form
						type="post"
						action="#"
						className="subscribe__form"
						onSubmit={handleSubmit}>
						<input
							type="email"
							name="email"
							className="subscribe__input"
							placeholder="Введите электронную почту"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<button className="subscribe__btn">Подписаться</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
