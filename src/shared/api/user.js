import { API_URL } from "./products";

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
