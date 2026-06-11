import React from "react";

import {
	useLocation,
	useNavigate
}
from "react-router-dom";

import "../assets/css/OrderSuccess.css";

const OrderSuccess = () => {

	const location =
		useLocation();

	const navigate =
		useNavigate();

	const order =
		location.state;

	if (!order) {

		return (

			<div
				className="order-success-page">

				<div
					className="success-card">

					<h1>

						Order Created

					</h1>

					<p>

						Your order has been processed successfully.

					</p>

					<button

						onClick={() =>
							navigate("/orders")
						}>

						View Orders

					</button>

				</div>

			</div>
		);
	}

	return (

		<div
			className="order-success-page">

			<div
				className="success-card">

				<div
					className="success-icon">

					✓

				</div>

				<h1>

					Order Placed Successfully

				</h1>

				<p>

					Thank you for choosing Milky-Way.

				</p>

				<div
					className="order-summary">

					<div
						className="summary-row">

						<span>

							Order ID

						</span>

						<strong>

							#{order.orderId}

						</strong>

					</div>

					<div
						className="summary-row">

						<span>

							Order Status

						</span>

						<strong>

							{order.orderStatus}

						</strong>

					</div>

					<div
						className="summary-row">

						<span>

							Payment Status

						</span>

						<strong>

							{order.paymentStatus}

						</strong>

					</div>

					<div
						className="summary-row">

						<span>

							Total Amount

						</span>

						<strong>

							₹{order.totalAmount}

						</strong>

					</div>

				</div>

				<div
					className="success-actions">

					<button

						className="orders-btn"

						onClick={() =>
							navigate("/orders")
						}>

						My Orders

					</button>

					<button

						className="shop-btn"

						onClick={() =>
							navigate("/products")
						}>

						Continue Shopping

					</button>

				</div>

			</div>

		</div>
	);
};

export default OrderSuccess;