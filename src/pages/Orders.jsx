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

	const loadOrders =
		async () => {

			try {

				const response =
					await orderService
						.getMyOrders();

				setOrders(
					response.data);

			} catch (error) {

				console.log(
					error);
			}
		};

	useEffect(() => {

		loadOrders();

	}, []);

	if (
		orders.length === 0
	) {

		return (

			<div
				className="empty-orders">

				<h2>

					No Orders Yet

				</h2>

			</div>
		);
	}

	return (

		<div
			className="orders-page">

			<h1>

				My Orders

			</h1>

			{
				orders.map(
					order => (

						<div

							key={
								order.orderId
							}

							className="order-card">

							<h3>

								Order #
								{
									order.orderId
								}

							</h3>

							<p>

								Amount :
								₹
								{
									order.totalAmount
								}

							</p>

							<p>

								Order Status :
								{
									order.orderStatus
								}

							</p>

							<p>

								Payment :
								{
									order.paymentStatus
								}

							</p>

						</div>
					))
			}

		</div>
	);
};

export default Orders;