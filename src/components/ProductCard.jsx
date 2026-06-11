import React from "react";

import {
	useNavigate
}
from "react-router-dom";

import "../assets/css/ProductCard.css";

import cartService
	from "../services/cartService";

import {
	useCart
}
from "../context/CartContext";

const ProductCard = ({
	product
}) => {

	const {
	loadCart
} = useCart();

	const navigate =
		useNavigate();

	const handleAddToCart =
	async () => {

		console.log(
			"Button Clicked");

		console.log(
			"Product :",
			product);

		try {

			const response =
				await cartService
					.addToCart(
						product.id,
						1);

			console.log(
				"Success :",
				response.data);

		} catch (error) {

			console.log(
				"Error :",
				error);

			console.log(
				"Error Response :",
				error.response);
		}
	};

	return (

		<div className="product-card">

			<img
				src={
					product.imageUrl
				}
				alt={
					product.productName
				}
			/>

			<h3>
				{
					product.productName
				}
			</h3>

			<p>
				{
					product.categoryName
				}
			</p>

			<h4>
				₹ {product.price}
			</h4>

			<button
				
				onClick={() =>
					navigate(
						`/products/${product.id}`)
				}>

				View Details

			</button>
            <button
	onClick={handleAddToCart}>

	Add To Cart

</button>

		</div>
	);
};

export default ProductCard;