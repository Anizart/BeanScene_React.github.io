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
