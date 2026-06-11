import React from "react";

import {
	useNavigate
}
from "react-router-dom";

import "../assets/css/SubscriptionBanner.css";

const SubscriptionBanner = () => {

	const navigate =
		useNavigate();

	return (

		<section
			className="subscription-banner">

			<div
				className="subscription-content">

				<span
					className="subscription-tag">

					PREMIUM DAIRY SUBSCRIPTION

				</span>

				<h2>

					Never Run Out Of Milk Again

				</h2>

				<p>

					Get fresh milk, curd, paneer,
					and dairy products delivered
					daily to your doorstep with
					flexible subscription plans.

				</p>

				<div
					className="subscription-features">

					<span>
						Daily Delivery
					</span>

					<span>
						Pause Anytime
					</span>

					<span>
						Fresh Farm Products
					</span>

				</div>

				<button

					onClick={() =>
						navigate(
							"/subscriptions"
						)
					}>

					Start Subscription

				</button>

			</div>

		</section>
	);
};

export default SubscriptionBanner;