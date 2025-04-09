import React from "react";

const Cards = ({ img, name, description, price, id }) => {
	return (
		<div className="menu__card">
			<div className="menu__wrapper-img">
				<img src={img} alt={name} className="menu__img" />
			</div>
			<h3 className="menu__name">{name}</h3>
			<div className="menu__weights">{description}</div>
			<div className="menu__price">{price}$</div>
			<button
				type="button"
				className="btn menu__btn menu__btn-product"
				id={id}>
				Заказать
			</button>
		</div>
	);
};

export default Cards;
