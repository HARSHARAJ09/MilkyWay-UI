import React from "react";

import "../assets/css/Testimonials.css";

const Testimonials = () => {

	const testimonials = [

		{
			name: "Sara",
			rating: "★★★★★",
			message:
				"Fresh milk delivered every morning without fail. The quality is excellent and my family loves it."
		},

		{
			name: "Maya",
			rating: "★★★★★",
			message:
				"The paneer and curd are always fresh. Milky-Way has become our trusted dairy partner."
		},

		{
			name: "Oasis",
			rating: "★★★★★",
			message:
				"The subscription service is fantastic. Easy to manage and deliveries are always on time."
		}
	];

	return (

		<section
			className="testimonial-section">

			<div
				className="testimonial-header">

				<h2>

					What Our Customers Say

				</h2>

				<p>

					Trusted by families who value
					freshness, quality, and reliable
					daily delivery.

				</p>

			</div>

			<div
				className="testimonial-grid">

				{
					testimonials.map(
						(testimonial, index) => (

							<div

								key={index}

								className="testimonial-card">

								<div
									className="testimonial-rating">

									{
										testimonial.rating
									}

								</div>

								<p
									className="testimonial-message">

									"
									{
										testimonial.message
									}
									"

								</p>

								<div
									className="testimonial-user">

									<div
										className="testimonial-avatar">

										{
											testimonial.name
												.charAt(0)
										}

									</div>

									<h4>

										{
											testimonial.name
										}

									</h4>

								</div>

							</div>
						))
				}

			</div>

		</section>
	);
};

export default Testimonials;