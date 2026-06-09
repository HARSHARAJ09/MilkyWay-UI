import React from "react";

import "../assets/css/WhyChooseUs.css";

const WhyChooseUs = () => {

	return (

		<section className="why-section">

			<h2>

				Why Choose Milky-Way ?

			</h2>

			<div className="why-grid">

				<div className="why-card">

					<h3>
						Farm Fresh
					</h3>

					<p>
						Directly sourced
						from trusted farms.
					</p>

				</div>

				<div className="why-card">

					<h3>
						Daily Delivery
					</h3>

					<p>
						Early morning
						delivery service.
					</p>

				</div>

				<div className="why-card">

					<h3>
						Quality Checked
					</h3>

					<p>
						100% tested and
						safe dairy products.
					</p>

				</div>

				<div className="why-card">

					<h3>
						Natural Products
					</h3>

					<p>
						No adulteration.
						Only pure dairy.
					</p>

				</div>

			</div>

		</section>
	);
};

export default WhyChooseUs;