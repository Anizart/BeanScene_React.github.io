import React from "react";
import "./demonstration.css";

const Demonstration = () => {
	return (
		<section class="section demonstration">
			<div class="container">
				<div class="demonstration__wrapper">
					<h2 class="title" data-title>
						Заказано сегодня
					</h2>
					<div class="demonstration__window">
						<div class="demonstration__quantity">0</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Demonstration;
