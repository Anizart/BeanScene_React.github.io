import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { checkAuth } from "@/shared/api/auth";
import ModalAdditives from "@/shared/ui/modals/additives/additives";

const MenuCard = ({
	products,
	isSignInOpen,
	setIsSignInOpen,
	setModalMessage,
}) => {
	const [isModalAdditives, setIsModalAdditives] = useState(false);
	const [selectedProductId, setSelectedProductId] = useState(null);

	useEffect(() => {
		document.body.classList.toggle("hidden", isModalAdditives);
	}, [isModalAdditives]);

	//+ Для дублирования карточек:
	const duplicateSlides = [...products];
	while (duplicateSlides.length < 16) {
		duplicateSlides.push(...products);
	}

	//+ Для проверки пользователя:
	const handleOrderClick = async (productId) => {
		try {
			const user = await checkAuth();

			if (!user) {
				console.log("Пользователь не авторизован");

				if (typeof setIsSignInOpen === "function") {
					setIsSignInOpen(!isSignInOpen);
				}

				return;
			}

			setSelectedProductId(productId);
			setIsModalAdditives(true);
		} catch (error) {
			console.error("Ошибка при открытии модального окна:", error);
		}
	};

	return (
		<>
			<Swiper
				modules={[Navigation]}
				spaceBetween={10}
				breakpoints={{
					320: {
						slidesPerView: 2,
					},
					460: {
						slidesPerView: 3,
					},
					770: {
						slidesPerView: 4,
					},
				}}
				loop={true}
				loopAdditionalSlides={4}
				className="response__swiper">
				{duplicateSlides.map((product, index) => (
					<SwiperSlide key={`${product.id}-${index}`}>
						<div className="menu__card">
							<div className="menu__wrapper-img">
								<img
									src={`http://api.bean-scene.tw1.su${product.img}`}
									alt={product.name}
									className="menu__img"
								/>
							</div>
							<h3 className="menu__name">{product.name}</h3>
							<div className="menu__weights">
								{product.description}
							</div>
							<div className="menu__price">{product.price} ₽</div>
							<button
								type="button"
								className="btn menu__btn menu__btn-product"
								onClick={() => handleOrderClick(product.id)}>
								Заказать
							</button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<ModalAdditives
				productId={selectedProductId}
				isModalAdditives={isModalAdditives}
				setIsModalAdditives={setIsModalAdditives}
				setModalMessage={setModalMessage}
			/>
		</>
	);
};

export default MenuCard;
