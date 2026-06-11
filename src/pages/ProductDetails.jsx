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

import "../assets/css/ProductDetails.css";

const ProductDetails = () => {

	const { id } =
		useParams();

	const [product,
		setProduct] =
		useState(null);

	useEffect(() => {

		loadProduct();

	}, []);

	const loadProduct =
		async () => {

		try {

			const response =
				await productService
					.getProductById(id);

			setProduct(
				response.data);

		} catch (error) {

			console.log(error);
		}
	};

	if (!product) {

		return <h2>Loading...</h2>;
	}

	return (

		<div>

			<h1>
				{product.productName}
			</h1>

			<p>
				{product.description}
			</p>

			<h3>
				₹ {product.price}
			</h3>

		</div>
	);
};

export default ProductDetails;