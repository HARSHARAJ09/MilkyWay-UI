import React,
{
	useEffect,
	useState
}
from "react";

import orderService
	from "../services/orderService";

const Orders = () => {

	const [orders,
		setOrders] =
		useState([]);

	useEffect(() => {

		loadOrders();

	}, []);

	const loadOrders =
		async () => {

		try {

			const response =
				await orderService
					.getMyOrders();

			setOrders(
				response.data);

		} catch (error) {

			console.log(error);
		}
	};

	return (

		<div>

			<h1>
				My Orders
			</h1>

			{
				orders.map(order => (

					<div
						key={
							order.orderId
						}>

						<h3>
							Order #
							{order.orderId}
						</h3>

						<p>
							₹
							{order.totalAmount}
						</p>

						<p>
							{
								order.orderStatus
							}
						</p>

					</div>
				))
			}

		</div>
	);
};

export default Orders;