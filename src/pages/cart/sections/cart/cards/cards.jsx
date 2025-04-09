import React from "react";
import "./cards.css";

const Cards = ({ products }) => {
	return products.map(({ name, description, price, img, id }) => (
		<div className="cards__card">
			<img src={img} alt={name} className="cards__img" />
			<h3 className="cards__name">Selected product: {name}</h3>
			<div className="cards__weights">{description}</div>
			<div className="cards__price">{price}$</div>
			<button className="btn cards__btn-order" id={id}>
				Order
			</button>
			<button type="submit" className="btn" id={id}>
				Add
			</button>
			<button type="button" className="btn cards__btn-remove" id={id}>
				Remove 🗑
			</button>
		</div>
	));
};

export default Cards;
