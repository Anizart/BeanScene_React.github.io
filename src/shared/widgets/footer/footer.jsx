import React from "react";
import "./footer.css";
import logo from "@assets/svg/logo.svg";
import pngwing from "@assets/pngwing.webp";
import facebook from "@assets/svg/footer_facebook.svg";
import instagram from "@assets/svg/footer_instagram.svg";
import youtube from "@assets/svg/footer_youtube.svg";
import x from "@assets/svg/footer_x.svg";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<div className="footer__wrapper-img-pngwing-left">
				<img
					src={pngwing}
					alt="pngwing coffee"
					className="footer__img-pngwing"
				/>
			</div>
			<div className="footer__wrapper-img-pngwing-right">
				<img
					src={pngwing}
					alt="pngwing coffee"
					className="footer__img-pngwing"
				/>
			</div>
			<div className="container">
				<div className="row d-flex">
					<div className="footer__offer col-lg-4">
						<a href="/" className="footer__wrapper-img">
							<img
								src={logo}
								alt="logo"
								className="footer__img"
							/>
						</a>
						<div className="footer__description">
							Мы создаем уникальные моменты для настоящих
							ценителей кофе. Присоединяйтесь к нам, чтобы
							наслаждаться качественным кофе, который подарит вам
							вдохновение и энергию на весь день.
						</div>
						<div className="footer__wrapper-icon">
							<a href="#" className="footer__link-icon">
								<img
									src={facebook}
									alt="facebook"
									className="footer__icon-link"
								/>
							</a>
							<a href="#" className="footer__link-icon">
								<img
									src={instagram}
									alt="instagram"
									className="footer__icon-link"
								/>
							</a>
							<a href="#" className="footer__link-icon">
								<img
									src={youtube}
									alt="youtube"
									className="footer__icon-link"
								/>
							</a>
							<a href="#" className="footer__link-icon">
								<img
									src={x}
									alt="x"
									className="footer__icon-link"
								/>
							</a>
						</div>
					</div>
					<div className="footer__about col-lg-2">
						<h2 className="title ignore-dark-theme">О нас</h2>
						<nav className="footer__nav">
							<ul className="footer__menu">
								<li className="footer__item">
									<a href="#" className="footer__link">
										Меню
									</a>
								</li>
								<li className="footer__item">
									<a href="#" className="footer__link">
										Особенности
									</a>
								</li>
								<li className="footer__item">
									<a href="#" className="footer__link">
										Новости и блоги
									</a>
								</li>
								<li className="footer__item">
									<a href="#" className="footer__link">
										Помощь и поддержка
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="footer__company col-lg-2">
						<h2 className="title ignore-dark-theme">Компания</h2>
						<div className="footer__wrapper-inn">
							<a href="#" className="footer__link">
								Как мы работаем
							</a>
							<a href="#" className="footer__link">
								Условия обслуживания
							</a>
							<a href="#" className="footer__link">
								Цены
							</a>
							<a href="#" className="footer__link">
								FAQ
							</a>
						</div>
					</div>
					<div className="footer__contact col-lg-4">
						<h2 className="title ignore-dark-theme">Контакты</h2>
						<div className="footer__wrapper-inn">
							<a href="#" className="footer__link">
								Москва, ул. Тверская, д. 7, офис 15
							</a>
							<a href="tel:+12029182132" className="footer__link">
								+7 800-123-45-67
							</a>
							<a href="#" className="footer__link">
								beanscene@gmail.com
							</a>
							<a href="#" className="footer__link">
								www.beanscene.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
