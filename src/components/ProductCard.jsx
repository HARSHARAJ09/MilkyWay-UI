import React from "react";

import {
	useNavigate
}
from "react-router-dom";

import "../assets/css/ProductCard.css";

const ProductCard = ({
	product
}) => {

	const navigate =
		useNavigate();

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

		</div>
	);
};

export default ProductCard;