import React from "react";
import "./notfound-page.css";
import gif from "@assets/gif/Kotoura-san-404.gif";
import { Link } from "react-router";

const NotfoundPage = () => {
	return (
		<div className="notfound">
			<div className="notfound__content">
				<h1 className="notfound__title">404</h1>
				<p className="notfound__text">Ой... Страничка не найдена</p>
				<img src={gif} alt="404 gif" className="notfound__gif" />
				<Link to="/" className="notfound__btn">
					На главную
				</Link>
			</div>
		</div>
	);
};

export default NotfoundPage;
