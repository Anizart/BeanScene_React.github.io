import React, { useEffect, useState } from "react";
import "./demonstration.css";

import { getOrdersToday } from "@/shared/api/orders";

const Demonstration = () => {
	const [ordersToday, setOrdersToday] = useState(0);

	useEffect(() => {
		const fetchOrders = async () => {
			const count = await getOrdersToday();
			setOrdersToday(count);
		};

		fetchOrders();
	}, []);

	return (
		<section className="section demonstration">
			<div className="container">
				<div className="demonstration__wrapper">
					<h2 className="title">Заказано сегодня</h2>
					<div className="demonstration__window">
						<div className="demonstration__quantity">
							{ordersToday}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Demonstration;
