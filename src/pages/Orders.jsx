import React,
{
	useEffect,
	useState
}
from "react";

import orderService
	from "../services/orderService";

import "../assets/css/Orders.css";

const Orders = () => {

	const [orders,
		setOrders] =
		useState([]);

	const [loading,
		setLoading] =
		useState(true);

	const [error,
		setError] =
		useState("");

	const loadOrders =
		async () => {

			try {

				setLoading(true);

				const response =
					await orderService
						.getMyOrders();

				setOrders(
					response.data || []
				);

			} catch (error) {

				console.error(
					error
				);

				setError(
					"Unable To Load Orders"
				);

			} finally {

				setLoading(false);
			}
		};

	useEffect(() => {

		loadOrders();

	}, []);

	if (loading) {

		return (

			<div
				className="orders-message">

				Loading Orders...

			</div>
		);
	}

	if (error) {

		return (

			<div
				className="orders-error">

				{error}

			</div>
		);
	}

	if (
		orders.length === 0
	) {

		return (

			<div
				className="empty-orders">

				<h2>

					No Orders Yet

				</h2>

				<p>

					Start shopping and place your first order.

				</p>

			</div>
		);
	}

	return (

		<div
			className="orders-page">

			<div
				className="orders-header">

				<h1>

					My Orders

				</h1>

				<p>

					Total Orders :

					{" "}

					{
						orders.length
					}

				</p>

			</div>

			<div
				className="orders-grid">

				{
					orders.map(
						order => (

							<div

								key={
									order.orderId
								}

								className="order-card">

								<div
									className="order-top">

									<h3>

										Order #

										{
											order.orderId
										}

									</h3>

									<span
										className="order-status">

										{
											order.orderStatus
										}

									</span>

								</div>

								<p>

									<strong>

										Amount :

									</strong>

									₹
									{
										order.totalAmount
									}

								</p>

								<p>

									<strong>

										Payment :

									</strong>

									{
										order.paymentStatus
									}

								</p>

								{
									order.createdAt &&

									<p>

										<strong>

											Date :

										</strong>

										{
											new Date(
												order.createdAt
											).toLocaleDateString()
										}

									</p>
								}

							</div>
						))
				}

			</div>

		</div>
	);
};

export default Orders;