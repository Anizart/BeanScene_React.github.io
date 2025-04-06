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
		<footer class="footer" id="contact">
			<div class="footer__wrapper-img-pngwing-left">
				<img
					src={pngwing}
					alt="pngwing coffee"
					class="footer__img-pngwing"
				/>
			</div>
			<div class="footer__wrapper-img-pngwing-right">
				<img
					src={pngwing}
					alt="pngwing coffee"
					class="footer__img-pngwing"
				/>
			</div>
			<div class="container">
				<div class="row d-flex">
					<div class="footer__offer col-lg-4">
						<a href="index.html" class="footer__wrapper-img">
							<img src={logo} alt="logo" class="footer__img" />
						</a>
						<div class="footer__description">
							Мы создаем уникальные моменты для настоящих
							ценителей кофе. Присоединяйтесь к нам, чтобы
							наслаждаться качественным кофе, который подарит вам
							вдохновение и энергию на весь день.
						</div>
						<div class="footer__wrapper-icon">
							<a href="#" class="footer__link-icon">
								<img
									src={facebook}
									alt="facebook"
									class="footer__icon-link"
								/>
							</a>
							<a href="#" class="footer__link-icon">
								<img
									src={instagram}
									alt="instagram"
									class="footer__icon-link"
								/>
							</a>
							<a href="#" class="footer__link-icon">
								<img
									src={youtube}
									alt="youtube"
									class="footer__icon-link"
								/>
							</a>
							<a href="#" class="footer__link-icon">
								<img
									src={x}
									alt="x"
									class="footer__icon-link"
								/>
							</a>
						</div>
					</div>
					<div class="footer__about col-lg-2">
						<h2 class="title">О нас</h2>
						<nav class="footer__nav">
							<ul class="footer__menu">
								<li class="footer__item">
									<a href="#" class="footer__link">
										Меню
									</a>
								</li>
								<li class="footer__item">
									<a href="#" class="footer__link">
										Особенности
									</a>
								</li>
								<li class="footer__item">
									<a href="#" class="footer__link">
										Новости и блоги
									</a>
								</li>
								<li class="footer__item">
									<a href="#" class="footer__link">
										Помощь и поддержка
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="footer__company col-lg-2">
						<h2 class="title">Компания</h2>
						<div class="footer__wrapper-inn">
							<a href="#" class="footer__link">
								Как мы работаем
							</a>
							<a href="#" class="footer__link">
								Условия обслуживания
							</a>
							<a href="#" class="footer__link">
								Цены
							</a>
							<a href="#" class="footer__link">
								FAQ
							</a>
						</div>
					</div>
					<div class="footer__contact col-lg-4">
						<h2 class="title">Контакты</h2>
						<div class="footer__wrapper-inn">
							<a href="#" class="footer__link">
								Москва, ул. Тверская, д. 7, офис 15
							</a>
							<a href="tel:+12029182132" class="footer__link">
								+7 800-123-45-67
							</a>
							<a href="#" class="footer__link">
								beanscene@gmail.com
							</a>
							<a href="#" class="footer__link">
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
