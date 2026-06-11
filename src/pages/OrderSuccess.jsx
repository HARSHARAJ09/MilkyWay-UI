import React from "react";

import {
	useLocation
}
from "react-router-dom";
import "../assets/css/OrderSuccess.css";

const OrderSuccess = () => {

	const location = useLocation();
const order =
		location.state;
		if (!order) {

	return (

		<div
			className="order-success">

			<h1>

				Order Created

			</h1>

		</div>
	);
}
	return (

		<div
			className="order-success">

			<h1>

				Order Placed Successfully

			</h1>
				<h3>

				Order ID :
				{
					order?.orderId
				}

			</h3>
			<p>

				Status :
				{
					order?.orderStatus
				}

			</p>

			<p>

				Payment :
				{
					order?.paymentStatus
				}

			</p>

			<p>

				Total :
				₹
				{
					order?.totalAmount
				}

			</p>

		</div>
	);
};

export default OrderSuccess;