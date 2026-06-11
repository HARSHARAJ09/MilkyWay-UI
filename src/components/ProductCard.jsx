import React from "react";

import {
	useNavigate
}
from "react-router-dom";

import cartService
	from "../services/cartService";

import {
	useCart
}
from "../context/CartContext";

import "../assets/css/ProductCard.css";

const ProductCard = ({
	product
}) => {

	const navigate =
		useNavigate();

	const {
		loadCart
	} = useCart();

	const handleAddToCart =
		async () => {

			try {

				await cartService
					.addToCart(
						product.id,
						1
					);

				if (loadCart) {

					await loadCart();
				}

				alert(
					`${product.productName} Added To Cart`
				);

			} catch (error) {

				console.error(
					"Add To Cart Error :",
					error
				);

				alert(
					"Unable To Add Product"
				);
			}
		};

	return (

		<div
			className="product-card">

			<div
				className="product-image">

				{
					product.imageUrl

					?

					<img
						src={
							product.imageUrl
						}
						alt={
							product.productName
						}
					/>

					:

					<div
						className="image-placeholder">

						No Image Available

					</div>
				}

			</div>

			<div
				className="product-content">

				<h3>

					{
						product.productName
					}

				</h3>

				<p
					className="product-category">

					{
						product.categoryName ||

						"Dairy Product"
					}

				</p>

				<p
					className="product-price">

					₹
					{
						product.price
					}

				</p>

				<p
					className="product-stock">

					Available Stock :

					{
						product.quantity
					}

				</p>

				<div
					className="product-actions">

					<button

						className="details-btn"

						onClick={() =>
							navigate(
								`/productsdetails/${product.id}`
							)
						}>

						View Details

					</button>

					<button

						className="cart-btn"

						onClick={
							handleAddToCart
						}>

						Add To Cart

					</button>

				</div>

			</div>

		</div>
	);
};

export default ProductCard;