import React,
{
	createContext,
	useContext,
	useEffect,
	useState
}
from "react";

import cartService
	from "../services/cartService";

const CartContext =
	createContext();

export const CartProvider = ({
	children
}) => {

	const [cartCount,
		setCartCount] =
		useState(0);

	const loadCart =
		async () => {

			try {

				const response =
					await cartService
						.getCart();

				setCartCount(
	response.data.length);

			} catch (error) {

				console.log(error);
			}
		};

	useEffect(() => {

		loadCart();

	}, []);

	return (

		<CartContext.Provider

			value={{

				cartCount,

				loadCart
			}}>

			{
				children
			}

		</CartContext.Provider>
	);
};

export const useCart =
	() => {

		return useContext(
			CartContext);
	};