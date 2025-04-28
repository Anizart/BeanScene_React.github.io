import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import default_image from "@assets/commentator.png";

import { fetchReviews } from "@/shared/api/reviews";

const ResponseSlider = () => {
	const [reviews, setReviews] = useState([]); // Состояние для хранения отзывов
	const [loading, setLoading] = useState(true); // Состояние для индикации загрузки
	const [error, setError] = useState(null); // Состояние для ошибок

	useEffect(() => {
		const loadReviews = async () => {
			try {
				const reviewsData = await fetchReviews();
				setReviews(reviewsData);
			} catch (err) {
				setError("Не удалось загрузить отзывы", err);
			} finally {
				setLoading(false);
			}
		};

		loadReviews();
	}, []);

	if (loading) {
		return <div>Загрузка отзывов...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

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
			{reviews.length === 0 ? (
				<div>Отзывов нет</div>
			) : (
				reviews.map((review) => (
					<SwiperSlide key={review.id}>
						<div className="response__wrapper col-10">
							<div className="response__quotation-marks">“</div>
							<div className="response__comment">
								{review.feedback}
							</div>
							<div className="subtitle response__subtitle">
								{review.name}
							</div>
							<div className="response__profession">Клиент</div>
							<div className="response__wrapper-img">
								<img
									src={default_image}
									alt={review.name}
									className="response__img"
								/>
							</div>
						</div>
					</SwiperSlide>
				))
			)}
		</Swiper>
	);
};

export default ResponseSlider;
