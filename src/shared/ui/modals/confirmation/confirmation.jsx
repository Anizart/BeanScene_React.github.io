import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { API_URL } from "@/shared/api/products";
import "./confirmation.css";

const ModalСonfirmation = ({ isСonfirmation, setIsСonfirmation }) => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			const res = await fetch(`${API_URL}auth/logout`, {
				method: "GET",
				credentials: "include",
			});

			if (res.ok) {
				setIsСonfirmation(false);
				navigate("/"); // редирект на главную
			} else {
				console.error("Не удалось выйти");
			}
		} catch (error) {
			console.error("Ошибка при выходе:", error);
		}
	};

	if (!isСonfirmation) return null;

	const modalContent = (
		<div
			className={`modal modal-question ${isСonfirmation ? "modal-area-active" : ""}`}
			onClick={() => setIsСonfirmation(!isСonfirmation)}>
			<div
				className="modal__wrapper"
				onClick={(e) => e.stopPropagation()}>
				<div className="modal__text">Подтвердить выход?</div>
				<div className="modal__wrapper-btn">
					<button
						type="button"
						className="btn modal__btn"
						onClick={() => setIsСonfirmation(!isСonfirmation)}>
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
export default ModalСonfirmation;
