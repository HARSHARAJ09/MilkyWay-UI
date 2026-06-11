import React from "react";

import {
	useNavigate
}
from "react-router-dom";

import "../assets/css/OfferBanner.css";

const OfferBanner = () => {

	const navigate =
		useNavigate();

	return (

		<section
			className="offer-banner">

			<div
				className="offer-content">

				<span
					className="offer-tag">

					LIMITED TIME OFFER

				</span>

				<h2>

					Get 15% Off On Your First Order

				</h2>

				<p>

					Enjoy farm-fresh milk, paneer,
					curd, ghee, and dairy products
					delivered directly to your
					doorstep.

				</p>

				<div
					className="offer-features">

					<span>
						Fresh Daily
					</span>

					<span>
						Fast Delivery
					</span>

					<span>
						Quality Assured
					</span>

				</div>

				<button

					onClick={() =>
						navigate(
							"/products"
						)
					}>

					Shop Now

				</button>

			</div>

		</section>
	);
};

export default OfferBanner;