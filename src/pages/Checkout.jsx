import React,
{
	useState
}
from "react";
import {
	useNavigate
}
from "react-router-dom";

import orderService
	from "../services/orderService";


import "../assets/css/Checkout.css";

const Checkout = () => {

	const [address,
		setAddress] =
		useState("");

	const navigate =
		useNavigate();

	const [remarks,
		setRemarks] =
		useState("");

	const [loading,
		setLoading] =
		useState(false);
	
		const handlePlaceOrder =
		async () => {

			try {

				setLoading(
					true);

				const response =
					await orderService
						.placeOrder(
							remarks);

				navigate(
					"/order-success",
					{
						state:
						response.data
					});

			} catch (error) {

				console.log(
					error);
			}
			finally {

				setLoading(
					false);
			}
		};	

	return (

		<div
			className="checkout-page">

			<h1>

				Checkout

			</h1>

			<textarea

				value={
					address
				}

				onChange={
					(event) =>
						setAddress(
							event.target.value)
				}

				placeholder="Enter Delivery Address"
			/>

			<button
				onClick={
					handlePlaceOrder
				}>

				{
					loading
					? "Placing..."
					: "Place Order"
				}

			</button>

		</div>
	);
};

export default Checkout;