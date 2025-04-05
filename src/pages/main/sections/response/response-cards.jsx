import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

import user from "@assets/commentator.png";

const MenuSlider = () => {
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
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry...
						</div>
						<div className="subtitle response__subtitle">
							Jonny Thomas
						</div>
						<div className="response__profession">
							Project Manager
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

export default MenuSlider;
