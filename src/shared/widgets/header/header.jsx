import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

import Nav from "./header-nav/header-nav";
import logo from "@assets/svg/logo.svg";
import cart from "@assets/svg/basket.svg";
import search from "@assets/svg/header_search.svg";
import { Link } from "react-router";
import { checkAuth } from "@/shared/api/auth";

const Header = ({
	isBurgerOpen,
	mode,
	isSignUpOpen,
	isSignInOpen,
	isSearchOpen,
	onToggleBurger,
	onToggleMode,
	setIsSignUpOpen,
	setIsSignInOpen,
	setIsSearchOpen,
}) => {
	const navigate = useNavigate();

	useEffect(() => {
		const header = document.querySelector(".header");
		if (!header) return;

		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop >= 10) {
				header.classList.add("bg-blure");
			} else {
				header.classList.remove("bg-blure");
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Очистка при размонтировании
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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

			navigate("/cart");
		} catch (err) {
			console.error("Ошибка при проверке пользователя:", err);
			e.preventDefault();
		}
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper d-flex">
					<div className="header__wrapper-img">
						<Link to="/" className="header__link-logo">
							<img
								src={logo}
								alt="logo"
								className="header__img"
							/>
						</Link>
					</div>
					<div
						className={`header__wrapper-nav ${isBurgerOpen ? "active-burger" : ""}`}>
						<Nav
							isSignInOpen={isSignInOpen}
							setIsSignInOpen={setIsSignInOpen}
						/>
						<div className="header__wrapper-elem">
							<div
								className={`header__toggle-container ${mode ? "toggle-container-bg" : ""}`}
								id="toggle-dark-mode"
								onClick={() => onToggleMode(!mode)}>
								<div
									className={`header__circle ${mode ? "circle-transform" : ""}`}></div>
							</div>
							<Link to="/cart" className="header__basket">
								<img
									src={cart}
									alt="корзина"
									className="header__basket"
									onClick={handleOfficeClick}
								/>
							</Link>
							<button
								type="button"
								className="header__btn-search"
								onClick={() => setIsSearchOpen(!isSearchOpen)}>
								<img
									src={search}
									alt="поиск"
									className="header__search"
								/>
							</button>
							<button
								type="button"
								className="header__sign-in"
								onClick={() => setIsSignInOpen(!isSignInOpen)}>
								Войти
							</button>
							<button
								type="button"
								className="btn header__sing-up"
								onClick={() => setIsSignUpOpen(!isSignUpOpen)}>
								Регистрация
							</button>
						</div>
					</div>
					<span
						onClick={() => onToggleBurger(!isBurgerOpen)}
						className="header__burger"></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
