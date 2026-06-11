import React from "react";

import "../assets/css/WhyChooseUs.css";

const WhyChooseUs = () => {

	return (

		<section className="why-section">

			<div className="why-header">

				<h2>

					Why Choose Milky-Way?

				</h2>

				<p>

					Fresh dairy products delivered
					directly from trusted farms to
					your doorstep every day.

				</p>

			</div>

			<div className="why-grid">

				<div className="why-card">

					<div className="why-icon">

						🥛

					</div>

					<h3>

						Farm Fresh

					</h3>

					<p>

						Directly sourced from trusted
						local farms ensuring maximum
						freshness and nutrition.

					</p>

				</div>

				<div className="why-card">

					<div className="why-icon">

						🚚

					</div>

					<h3>

						Daily Delivery

					</h3>

					<p>

						Early morning doorstep
						delivery so your family
						never runs out of dairy.

					</p>

				</div>

				<div className="why-card">

					<div className="why-icon">

						✅

					</div>

					<h3>

						Quality Checked

					</h3>

					<p>

						Every product goes through
						strict quality and safety
						inspection before delivery.

					</p>

				</div>

				<div className="why-card">

					<div className="why-icon">

						🌿

					</div>

					<h3>

						100% Natural

					</h3>

					<p>

						No adulteration, no harmful
						preservatives, only pure
						and natural dairy products.

					</p>

				</div>

			</div>

		</section>
	);
};

export default WhyChooseUs;