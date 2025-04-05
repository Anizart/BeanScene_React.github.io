import React from "react";
import "./chance.css";
import bg from "@assets/bg_coffee.webp";
import grains from "@assets/section_5_grains.webp";
import cup from "@assets/section_5_cup.webp";

const Chance = () => {
	return (
		<section class="section chance">
			<div class="chance__wrapper-img-bg">
				<img src={bg} alt="background" class="chance__img-bg" />
			</div>
			<div class="chance__wrapper-img-grains">
				<img src={grains} alt="grains" class="chance__img-grains" />
			</div>
			<div class="container">
				<div class="chance__wrapper">
					<div class="chance__offer col-md-5 col-lg-6">
						<h2 class="title chance__title title-light">
							Get a chance to have an Amazing morning
						</h2>
						<div class="chance__description">
							We are giving you are one time opportunity to
							<br />
							experience a better life with coffee.
						</div>
						<a href="#" class="btn chance__btn">
							Order Now
						</a>
					</div>
					<div class="chance__wrapper-img">
						<img
							src={cup}
							alt="a cup of coffee"
							class="chance__img"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Chance;
