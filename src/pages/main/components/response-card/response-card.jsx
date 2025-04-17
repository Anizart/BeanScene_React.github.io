import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import user from "@assets/commentator.png";

const ResponseSlider = () => {
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={10}
			slidesPerView={1}
			loop={true}
			navigation={{
				nextEl: ".response__rewind-right",
				prevEl: ".response__rewind-left",
			}}
			className="response__swiper">
			{[1, 2, 3, 4].map((_, i) => (
				<SwiperSlide key={i}>
					<div className="response__wrapper col-10">
						<div className="response__quotation-marks">“</div>
						<div className="response__comment">
							Кофе здесь — это настоящее искусство! Каждый глоток
							— как вдохновение для работы. Рекомендую всем, кто
							ценит настоящий вкус и высокое качество.
						</div>
						<div className="subtitle response__subtitle">
							Джонни Томас
						</div>
						<div className="response__profession">
							Руководитель проекта
						</div>
						<div className="response__wrapper-img">
							<img
								src={user}
								alt="commentator"
								className="response__img"
							/>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ResponseSlider;
