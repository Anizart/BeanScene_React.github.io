export const API_URL = "http://localhost:3000/api/";

export async function getProducts() {
	try {
		const res = await fetch(`${API_URL}products`);
		if (!res.ok) {
			throw new Error("Ошибка при получении продуктов");
		}
		const data = await res.json();
		return data;
	} catch (err) {
		console.error("Ошибка при загрузке продуктов", err);
		return [];
	}
}

export const searchProducts = async (query) => {
	try {
		const response = await fetch(
			`${API_URL}products?query=${encodeURIComponent(query)}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			},
		);

		if (!response.ok) {
			throw new Error("Ошибка при поиске продуктов");
		}

		return await response.json();
	} catch (error) {
		console.error("Ошибка в searchProducts:", error);
		return [];
	}
};
