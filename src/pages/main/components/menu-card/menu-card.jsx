import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const MenuCard = ({ products }) => {
	//+ Для дублирования карточек:
	const duplicateSlides = [...products];
	while (duplicateSlides.length < 16) {
		duplicateSlides.push(...products);
	}

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
							id={product.id}>
							Заказать
						</button>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default MenuCard;
