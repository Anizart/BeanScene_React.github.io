import { API_URL } from "./products";

export const subscribeEmail = async (email) => {
	try {
		const response = await fetch(`${API_URL}subscribe/email`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Ошибка при подписке");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Ошибка в подписке:", error);
		throw error;
	}
};
