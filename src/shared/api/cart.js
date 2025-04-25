import { API_URL } from "./products";

export const getBasket = async () => {
	try {
		const res = await fetch(`${API_URL}basket`, {
			method: "GET",
			credentials: "include",
		});
		if (!res.ok) throw new Error("Failed to fetch basket");
		return await res.json();
	} catch (err) {
		console.error("Ошибка получения корзины", err);
		throw err;
	}
};

export const addToBasket = async (productId, additives = "Без добавок") => {
	const response = await fetch(`${API_URL}basket`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			productId,
			additives,
		}),
		credentials: "include",
	});

	if (!response.ok) {
		throw new Error("Ошибка при добавлении товара в корзину");
	}

	console.log(`Товар с ID ${productId} добавлен в корзину`);
	return response;
};
