import React,
{
	useEffect,
	useState
}
from "react";

import {
	useParams
}
from "react-router-dom";

import productService
	from "../services/productService";

import cartService
	from "../services/cartService";

import "../assets/css/ProductDetails.css";

const ProductDetails = () => {

	const { id } =
		useParams();

	const [product,
		setProduct] =
		useState(null);

	const [loading,
		setLoading] =
		useState(true);

	const [error,
		setError] =
		useState("");

	const [addingToCart,
		setAddingToCart] =
		useState(false);

	const [message,
		setMessage] =
		useState("");

	useEffect(() => {

		loadProduct();

	}, [id]);

	const loadProduct =
		async () => {

			try {

				setLoading(true);

				const response =
					await productService
						.getProductById(id);

				setProduct(
					response.data
				);

			} catch (error) {

				console.error(error);

				setError(
					"Unable to load product details."
				);

			} finally {

				setLoading(false);
			}
		};

	const handleAddToCart =
		async () => {

			try {

				setAddingToCart(true);

				await cartService
					.addToCart(
						product.id,
						1
					);

				setMessage(
					"Product added to cart successfully."
				);

			} catch (error) {

				console.error(error);

				setMessage(
					"Failed to add product to cart."
				);

			} finally {

				setAddingToCart(false);

				setTimeout(() => {

					setMessage("");

				}, 3000);
			}
		};

	if (loading) {

		return (

			<div className="product-loading">

				Loading Product...

			</div>
		);
	}

	if (error) {

		return (

			<div className="product-error">

				{error}

			</div>
		);
	}

	return (

		<div className="product-details">

			<div className="product-image">

				<img

					src={
						product.imageUrl ||

						"https://via.placeholder.com/500x500?text=Milk+Product"
					}

					alt={
						product.productName
					}
				/>

			</div>

			<div className="product-info">

				<h1>

					{product.productName}

				</h1>

				<p className="product-category">

					Category :

					{" "}

					{
						product.categoryName ||
						"Dairy Product"
					}

				</p>

				<p className="product-description">

					{
						product.description
					}

				</p>

				<h2>

					₹

					{
						product.price
					}

				</h2>

				{
					message &&

					<div className="product-message">

						{message}

					</div>
				}

				<button

					onClick={
						handleAddToCart
					}

					disabled={
						addingToCart
					}

				>

					{
						addingToCart

						?

						"Adding..."

						:

						"Add To Cart"
					}

				</button>

			</div>

		</div>
	);
};

export default ProductDetails;