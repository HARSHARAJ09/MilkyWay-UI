import React from "react";

import {
	useNavigate
}
from "react-router-dom";

import "../assets/css/HeroSection.css";

const HeroSection = () => {

	const navigate =
		useNavigate();

	return (

		<section
			className="hero">

			<div
				className="hero-overlay">

				<div
					className="hero-content">

					<span
						className="hero-badge">

						Fresh Dairy Delivered Daily

					</span>

					<h1>

						Fresh Dairy
						At Your Doorstep

					</h1>

					<p>

						Pure Milk, Paneer,
						Curd, Butter, Cheese
						and Ghee delivered
						fresh from trusted farms.

					</p>

					<div
						className="hero-features">

						<span>
							100% Fresh
						</span>

						<span>
							Daily Delivery
						</span>

						<span>
							Quality Checked
						</span>

					</div>

					<div
						className="hero-actions">

						<button

							className="shop-btn"

							onClick={() =>
								navigate(
									"/products"
								)
							}>

							Shop Fresh Now

						</button>

						<button

							className="subscribe-btn"

							onClick={() =>
								navigate(
									"/subscriptions"
								)
							}>

							Start Subscription

						</button>

					</div>

				</div>

			</div>

		</section>
	);
};

export default HeroSection;