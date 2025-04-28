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
