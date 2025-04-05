import React from "react";
import "./header.css";
import Nav from "./header-nav/header-nav";
import logo from "@assets/svg/logo.svg";
import cart from "@assets/svg/basket.svg";
import search from "@assets/svg/header_search.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper d-flex">
					<div className="header__wrapper-img">
						<a href="index.html" className="header__link-logo">
							<img
								src={logo}
								alt="logo"
								className="header__img"
							/>
						</a>
					</div>
					<div className="header__wrapper-nav">
						<Nav />
						<div className="header__wrapper-elem">
							<div
								className="header__toggle-container"
								id="toggle-dark-mode">
								<div className="header__circle"></div>
							</div>
							<a href="basket.html" className="header__basket">
								<img
									src={cart}
									alt="basket"
									className="header__basket"
								/>
							</a>
							<button
								type="button"
								className="header__btn-search">
								<img
									src={search}
									alt="search"
									className="header__search"
								/>
							</button>
							<button
								type="button"
								className="header__sign-in"
								data-open-signIn>
								Sign In
							</button>
							<button
								type="button"
								className="btn header__sing-up"
								data-open-signUp>
								SignUp
							</button>
						</div>
					</div>
					<span className="header__burger"></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
