import React from "react";
import { Link } from "react-router";

const Nav = () => {
	return (
		<nav className="header__nav">
			<ul className="header__menu">
				<li className="header__item">
					<Link
						to="/office"
						id="office"
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
