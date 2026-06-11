import React from "react";

import {
	Link
}
from "react-router-dom";

import "../assets/css/Footer.css";

const Footer = () => {

	return (

		<footer
			className="footer">

			<div
				className="footer-container">

				<div
					className="footer-section">

					<h2>

						Milky-Way Dairy

					</h2>

					<p>

						Fresh Dairy Products
						delivered directly
						from farm to home.

					</p>

				</div>

				<div
					className="footer-section">

					<h3>

						Quick Links

					</h3>

					<Link to="/home">

						Home

					</Link>

					<Link to="/products">

						Products

					</Link>

					<Link to="/orders">

						Orders

					</Link>

					<Link to="/subscriptions">

						Subscriptions

					</Link>

				</div>

				<div
					className="footer-section">

					<h3>

						Contact Us

					</h3>

					<p>

						Email:
						support@milkyway.com

					</p>

					<p>

						Phone:
						+91 9449996769

					</p>

				</div>

			</div>

			<div
				className="footer-bottom">

				© 2026 Milky-Way Dairy.
				All Rights Reserved.

			</div>

		</footer>
	);
};

export default Footer;