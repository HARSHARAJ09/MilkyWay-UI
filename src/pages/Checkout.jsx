import React,
{
	useEffect,
	useState
}
from "react";

import {
	useNavigate
}
from "react-router-dom";

import addressService
	from "../services/addressService";

import orderService
	from "../services/orderService";

import "../assets/css/Checkout.css";

const Checkout = () => {

	const navigate =
		useNavigate();

	const [addresses,
		setAddresses] =
		useState([]);

	const [selectedAddress,
		setSelectedAddress] =
		useState(null);

	const [remarks,
		setRemarks] =
		useState("");

	const [loading,
		setLoading] =
		useState(false);

	const loadAddresses =
		async () => {

			try {

				const response =
					await addressService
						.getAddresses();

				setAddresses(
					response.data);

				const defaultAddress =
					response.data.find(
						address =>
						address.defaultAddress);

				if (
					defaultAddress
				) {

					setSelectedAddress(
						defaultAddress.addressId);
				}

			} catch (error) {

				console.log(
					error);
			}
		};

	useEffect(() => {

		loadAddresses();

	}, []);

	const handlePlaceOrder =
		async () => {

			if (
				!selectedAddress
			) {

				alert(
					"Select Delivery Address");

				return;
			}

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

			<div
				className="address-section">

				<h2>

					Select Address

				</h2>

					{
		addresses.length === 0 &&

		<div
			className="no-address">

			<h3>

				No Address Added

			</h3>

			<p>

				Add an address
				from Profile page.

			</p>

		</div>
	}

				{
					addresses.map(
						address => (

							<div

								key={
									address.addressId
								}

								className={
									selectedAddress ===
									address.addressId

									?

									"checkout-address selected"

									:

									"checkout-address"
								}

								onClick={() =>
									setSelectedAddress(
										address.addressId)
								}>

								<h4>

									{
										address.addressLine1
									}

								</h4>

								<p>

									{
										address.city
									}
									,
									{
										address.state
									}

								</p>

								<p>

									{
										address.pincode
									}

								</p>

							</div>
						))
				}

			</div>

			<textarea

				value={
					remarks
				}

				onChange={
					(event) =>
						setRemarks(
							event.target.value)
				}

				placeholder="Delivery Remarks"
			/>

			<button

				onClick={
					handlePlaceOrder
				}>

				{
					loading

					?

					"Placing Order..."

					:

					"Place Order"
				}

			</button>

		</div>
	);
};

export default Checkout;