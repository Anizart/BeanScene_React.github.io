import React from "react";

const Nav = () => {
	return (
		<nav className="header__nav">
			<ul className="header__menu">
				<li className="header__item">
					<a
						href="#"
						id="office"
						className="header__link header__link-accent">
						Офис
					</a>
				</li>
				<li className="header__item">
					<a href="#home" className="header__link">
						Главная
					</a>
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
