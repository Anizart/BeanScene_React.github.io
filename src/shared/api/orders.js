import { API_URL } from "./products";

export const getOrdersToday = async () => {
	try {
		const response = await fetch(`${API_URL}orders/today`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		if (!response.ok) {
			throw new Error("Ошибка при получении количества заказов");
		}

		const data = await response.json();
		return data.count;
	} catch (error) {
		console.error("Ошибка в getOrdersToday:", error);
		return 0;
	}
};

export const createOrders = async (ordersData) => {
	try {
		const response = await fetch(`${API_URL}orders`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(ordersData),
		});

		const result = await response.json();
		return result;
	} catch (err) {
		console.error("Ошибка при создании заказов:", err);
		throw err;
	}
};
