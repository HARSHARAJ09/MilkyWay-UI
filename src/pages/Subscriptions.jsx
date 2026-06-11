import React from "react";

import "../assets/css/Subscriptions.css";

const Subscriptions = () => {

	return (

		<div className="subscription-page">

			<h1>

				My Subscriptions

			</h1>

			<div className="subscription-card">

				<h3>

					Cow Milk Subscription

				</h3>

				<p>

					Quantity : 1 Liter

				</p>

				<p>

					Delivery : Daily

				</p>

				<div
					className="subscription-actions">

					<button>

						Pause

					</button>

					<button>

						Resume

					</button>

				</div>

			</div>

		</div>
	);
};

export default Subscriptions;