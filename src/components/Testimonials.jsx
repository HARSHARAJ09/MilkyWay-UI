import React from "react";

import "../assets/css/Testimonials.css";

const Testimonials = () => {

	return (

		<section className="testimonial-section">

			<h2>

				What Our Customers Say

			</h2>

			<div className="testimonial-grid">

				<div className="testimonial-card">

					<p>

						Fresh milk every
						morning.
						Excellent service.

					</p>

					<h4>

						Sara

					</h4>

				</div>

				<div className="testimonial-card">

					<p>

						Paneer quality is
						outstanding.

					</p>

					<h4>

						Maya

					</h4>

				</div>

				<div className="testimonial-card">

					<p>

						The best dairy
						store I have used.

					</p>

					<h4>

						Oasis

					</h4>

				</div>

			</div>

		</section>
	);
};

export default Testimonials;