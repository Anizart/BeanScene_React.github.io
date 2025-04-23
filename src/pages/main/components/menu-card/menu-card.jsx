import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { checkAuth } from "@/shared/api/auth";

const MenuCard = ({ products, isSignInOpen, setIsSignInOpen }) => {
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

			//? ! Добавление товара в корзину можно реализовать здесь
			console.log(`Товар с ID ${productId} добавлен в корзину`);
			// await addToCart(productId);

			// ? Позже по ID выводи карточки, но в корзине меняй ID на внутренний
		} catch (error) {
			console.error(
				"Ошибка при попытке добавить товар в корзину:",
				error,
			);
		}
	};

	return (
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
								src={`http://localhost:3000/${product.img}`}
								alt={product.name}
								className="menu__img"
							/>
						</div>
						<h3 className="menu__name">{product.name}</h3>
						<div className="menu__weights">
							{product.description}
						</div>
						<div className="menu__price">{product.price}$</div>
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
	);
};

export default MenuCard;
