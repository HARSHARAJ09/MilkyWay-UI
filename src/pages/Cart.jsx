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

import cartService
	from "../services/cartService";

import "../assets/css/Cart.css";

const Cart = () => {

	const navigate =
		useNavigate();

	const [cartItems,
		setCartItems] =
		useState([]);

	const loadCart =
		async () => {

			try {

				const response =
					await cartService
						.getCart();

				console.log(
					"Cart Response:",
					response.data);

				setCartItems(
					response.data);

			} catch (error) {

				console.log(
					error);
			}
		};

	useEffect(() => {

		loadCart();

	}, []);

	if (
		cartItems.length === 0
	) {

		return (

			<div
				className="empty-cart">

				<h2>

					Your Cart Is Empty

				</h2>

				<p>

					Add some dairy products
					to start shopping.

				</p>

			</div>
		);
	}

	const grandTotal =
		cartItems.reduce(

			(total, item) =>

				total +
				item.totalPrice,

			0
		);

	return (

		<div
			className="cart-page">

			<h1>

				My Cart

			</h1>

			<div
				className="cart-items">

				{
					cartItems.map(
						item => (

							<div

								key={
									item.cartItemId
								}

								className="cart-item">

								<div
									className="cart-item-left">

									<h3
										className="cart-item-name">

										{
											item.productName
										}

									</h3>

									<p
										className="cart-item-quantity">

										Quantity :
										{
											item.quantity
										}

									</p>

								</div>

								<div
									className="cart-item-price">

									₹
									{
										item.totalPrice
									}

								</div>

							</div>
						))
				}

			</div>

			<div
				className="cart-summary">

				<h2>

					Order Summary

				</h2>

				<div
					className="cart-total">

					₹
					{
						grandTotal
					}

				</div>

				<button

					onClick={() =>
						navigate(
							"/checkout")
					}>

					Proceed To Checkout

				</button>

			</div>

		</div>
	);
};

export default Cart;