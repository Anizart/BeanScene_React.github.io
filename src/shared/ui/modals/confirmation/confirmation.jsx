import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { API_URL } from "@/shared/api/products";
import "./confirmation.css";

const ModalConfirmation = ({
	isConfirmation,
	setIsConfirmation,
	setModalMessage,
}) => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			const res = await fetch(`${API_URL}auth/logout`, {
				method: "GET",
				credentials: "include",
			});

			if (res.ok) {
				const data = await res.json();
				setIsConfirmation(false);

				setModalMessage({
					isOpen: true,
					message: data.message,
				});

				setTimeout(() => {
					setModalMessage({ isOpen: false, message: "" });
					navigate("/"); // редирект на главную
					window.location.reload();
				}, 3000);
			} else {
				console.error("Не удалось выйти");
			}
		} catch (err) {
			console.error("Ошибка при выходе:", err);

			setModalMessage({
				isOpen: true,
				message: err.message,
			});

			setTimeout(() => {
				setModalMessage({ isOpen: false, message: "" });
			}, 3000);
		}
	};

	if (!isConfirmation) return null;

	const modalContent = (
		<div
			className={`modal modal-question ${isConfirmation ? "modal-area-active" : ""}`}
			onClick={() => setIsConfirmation(!isConfirmation)}>
			<div
				className="modal__wrapper"
				onClick={(e) => e.stopPropagation()}>
				<div className="modal__text">Подтвердить выход?</div>
				<div className="modal__wrapper-btn">
					<button
						type="button"
						className="btn modal__btn"
						onClick={() => setIsConfirmation(!isConfirmation)}>
						Нет
					</button>
					<button
						type="button"
						className="btn modal__btn btn-exit"
						onClick={handleLogout}>
						Да
					</button>
				</div>
			</div>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root"));
};
export default ModalConfirmation;
