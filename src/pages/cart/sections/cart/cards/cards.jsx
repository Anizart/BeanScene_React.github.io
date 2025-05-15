import React from "react";
import "./cards.css";

const Cards = ({ products, onRemove }) => {
	return products.map(({ name, description, additives, price, img, id }) => (
		<div className="cards__card" key={id}>
			<img
				src={`http://api.bean-scene.tw1.su/${img}`}
				alt={name}
				className="cards__img"
			/>
			<h3 className="cards__name">Выбранный кофе: {name}</h3>
			<div className="cards__weights">{description}</div>
			<div className="cards__weights">Добавки: {additives}</div>
			<div className="cards__price">{price}₽</div>
			<button
				type="button"
				className="btn cards__btn-remove"
				onClick={() => onRemove(id)}>
				Удалить 🗑
			</button>
		</div>
	));
};

export default Cards;
