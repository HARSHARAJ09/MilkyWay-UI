import React from "react";

import "../assets/css/Statistics.css";

const Statistics = () => {

	return (

		<section
			className="stats-section">

			<div
				className="stats-header">

				<h2>

					Trusted By Thousands Of Families

				</h2>

				<p>

					Delivering fresh dairy products
					every day with quality,
					reliability and care.

				</p>

			</div>

			<div
				className="stats-grid">

				<div
					className="stat-card">

					<h3>

						5000+

					</h3>

					<p>

						Happy Customers

					</p>

				</div>

				<div
					className="stat-card">

					<h3>

						100+

					</h3>

					<p>

						Dairy Products

					</p>

				</div>

				<div
					className="stat-card">

					<h3>

						50+

					</h3>

					<p>

						Farm Partners

					</p>

				</div>

				<div
					className="stat-card">

					<h3>

						24/7

					</h3>

					<p>

						Customer Support

					</p>

				</div>

			</div>

		</section>
	);
};

export default Statistics;