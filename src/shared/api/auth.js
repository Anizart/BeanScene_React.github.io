import { API_URL } from "./products";

export const regist = async (userData) => {
	try {
		const res = await fetch(`${API_URL}auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include", // Разрешаю cookie
			body: JSON.stringify(userData),
		});

		if (!res.ok) {
			const errorData = await res.json();
			throw new Error(errorData.message || "Ошибка регистрации");
		}

		const data = await res.json();
		return data;
	} catch (err) {
		console.error("Ошибка при регистрации:", err.message);
		throw err;
	}
};

export const login = async (author) => {
	try {
		const res = await fetch(`${API_URL}auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(author),
			credentials: "include",
		});

		if (!res.ok) {
			const errorData = await res.json();
			throw new Error(errorData.message || "Ошибка входа");
		}

		const data = await res.json();
		return data;
	} catch (err) {
		console.error("Ошибка при авторизации:", err.message);
		throw err;
	}
};

export const checkAuth = async () => {
	try {
		const res = await fetch(`${API_URL}auth/check-auth`, {
			credentials: "include",
		});

		if (!res.ok) throw new Error("Не авторизован");
		return await res.json();
	} catch (err) {
		console.error("Ошибка проверки авторизации", err);
		return null;
	}
};

export const logout = async () => {
	try {
		const res = await fetch(`${API_URL}auth/logout`, {
			credentials: "include",
		});

		if (!res.ok) throw new Error("Не удалось выйти");
	} catch (err) {
		console.error("Ошибка выхода", err);
	}
};
