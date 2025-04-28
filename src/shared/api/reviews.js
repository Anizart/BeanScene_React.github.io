import { API_URL } from "./products";

export const fetchReviews = async () => {
	try {
		const response = await fetch(`${API_URL}reviews`);
		if (!response.ok) {
			throw new Error("Не удалось получить отзывы");
		}
		const data = await response.json();
		return data;
	} catch (err) {
		console.error("Ошибка при получении отзывов:", err);
		throw err;
	}
};
