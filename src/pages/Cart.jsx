import React,
{
	useEffect,
	useState
}
from "react";

import cartService
	from "../services/cartService";

const Cart = () => {

	const [cartItems,
		setCartItems] =
		useState([]);

	useEffect(() => {

		loadCart();

	}, []);

	const loadCart =
		async () => {

		try {

			const response =
				await cartService
					.getCartItems();

			setCartItems(
				response.data);

		} catch (error) {

			console.log(error);
		}
	};

	return (

		<div>

			<h1>
				My Cart
			</h1>

			{
				cartItems.map(item => (

					<div
						key={
							item.cartItemId
						}>

						<h3>
							{item.productName}
						</h3>

						<p>
							Qty :
							{item.quantity}
						</p>

						<p>
							₹
							{item.totalPrice}
						</p>

					</div>
				))
			}

		</div>
	);
};

export default Cart;