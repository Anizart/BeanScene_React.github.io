import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth } from "@/shared/api/auth";

const Nav = ({ isSignInOpen, setIsSignInOpen }) => {
	const navigate = useNavigate();

	const handleOfficeClick = async (e) => {
		e.preventDefault();

		try {
			const user = await checkAuth();

			if (!user) {
				console.log("Пользователь не авторизован");

				if (typeof setIsSignInOpen === "function") {
					setIsSignInOpen(!isSignInOpen);
				}

				return;
			}

			navigate("/office");
		} catch (err) {
			console.error("Ошибка при проверке пользователя:", err);
			e.preventDefault();
		}
	};

	return (
		<nav className="header__nav">
			<ul className="header__menu">
				<li className="header__item">
					<Link
						type="button"
						to="/office"
						id="office"
						onClick={handleOfficeClick}
						className="header__link header__link-accent">
						Офис
					</Link>
				</li>
				<li className="header__item">
					<Link to="/" className="header__link">
						Главная
					</Link>
				</li>
				<li className="header__item">
					<a href="#about-us" className="header__link">
						О нас
					</a>
				</li>
				<li className="header__item">
					<a href="#contact" className="header__link">
						Контакты
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
