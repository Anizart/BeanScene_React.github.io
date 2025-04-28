import { API_URL } from "./products";

export const userProfile = async () => {
	try {
		const response = await fetch(`${API_URL}user`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Не удалось получить данные пользователя");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Ошибка в userProfile запросе:", error);
		throw error;
	}
};

export const updateUserProfile = async (formData) => {
	const res = await fetch(`${API_URL}user`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(formData),
	});

	if (!res.ok) {
		const error = await res.json();
		throw new Error(error.message || "Ошибка при обновлении профиля");
	}

	return await res.json();
};
