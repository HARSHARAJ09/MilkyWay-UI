import React from "react";

import ProductCard
	from "./ProductCard";

import "../assets/css/ProductCarousel.css";

const ProductCarousel = ({
	products
}) => {

	return (

		<section
			className="carousel-section">

			<h2>

				Popular Products

			</h2>

			<div
				className="carousel-container">

				{
					products.map(
						product => (

							<div
								key={
									product.id
								}
								className="carousel-item">

								<ProductCard
									product={
										product
									}
								/>

							</div>
						))
				}

			</div>

		</section>
	);
};

export default ProductCarousel;