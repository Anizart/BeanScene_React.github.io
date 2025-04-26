import React from "react";
import "./cards.css";

const Cards = ({ products, onRemove }) => {
	return products.map(({ name, description, additives, price, img, id }) => (
		<div className="cards__card" key={id}>
			<img
				src={`http://localhost:3000/${img}`}
				alt={name}
				className="cards__img"
			/>
			<h3 className="cards__name">Выбранный кофе: {name}</h3>
			<div className="cards__weights">{description}</div>
			<div className="cards__weights">Добавки: {additives}</div>
			<div className="cards__price">{price}$</div>
			<button className="btn cards__btn-order">Order</button>
			<button
				type="button"
				className="btn cards__btn-remove"
				onClick={() => onRemove(id)}>
				Remove 🗑
			</button>
		</div>
	));
};

export default Cards;
