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

	const [cartItems,
		setCartItems] =
		useState([]);
	const navigate =
	useNavigate();
		

	const loadCart =
	async () => {

		try {

			const response =
				await cartService
					.getCart();

			console.log(
				"Cart Response :",
				response.data);

			setCartItems(
				response.data);

		} catch (error) {

			console.log(
				"Cart Error :",
				error.response);

			console.log(error);
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

				{
				cartItems.map(
					item => (

						<div

							key={
								item.cartItemId
							}

							className="cart-item">

							<div>

								<h3>

									{
										item.productName
									}

								</h3>
<p>

									Qty :
									{
										item.quantity
									}

								</p>

							</div>
							<div>

								₹
								{
									item.totalPrice
								}

							</div>

						</div>
					))
			}
			<div
	className="cart-summary">

	<h2>

		Total :
		₹
		{
			grandTotal
		}

	</h2>

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