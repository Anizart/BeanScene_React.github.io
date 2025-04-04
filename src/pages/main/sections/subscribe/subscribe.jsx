import React from "react"
import "./subscribe.css"
import bg from "@assets/bg_coffee.webp"

const Subscribe = () => {
	return (
		<section className="subscribe">
			<div className="subscribe__wrapper-img-bg">
				<img src={bg} alt="background" className="subscribe__img-bg" />
			</div>
			<div className="container">
				<div className="subscribe__wrapper">
					<h2 className="title">Subscribe to get the Latest News</h2>
					<div className="subscribe__description">
						Don’t miss out on our latest news, updates, tips and
						special offers
					</div>
					<form type="post" action="#" className="subscribe__form">
						<input
							type="email"
							name="email"
							className="subscribe__input"
							placeholder="Enter your mail"
							tabIndex="6"
							required
						/>
						<button className="subscribe__btn" tabIndex="7">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Subscribe
