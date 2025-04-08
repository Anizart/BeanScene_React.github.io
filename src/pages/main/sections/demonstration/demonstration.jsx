import React from "react";
import "./demonstration.css";

const Demonstration = () => {
	return (
		<section className="section demonstration">
			<div className="container">
				<div className="demonstration__wrapper">
					<h2 className="title">Заказано сегодня</h2>
					<div className="demonstration__window">
						<div className="demonstration__quantity">0</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Demonstration;
