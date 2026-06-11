import React,
{
	useRef
}
from "react";

import ProductCard
	from "./ProductCard";

import "../assets/css/ProductCarousel.css";

const ProductCarousel = ({
	products
}) => {

	const carouselRef =
		useRef(null);

	const scrollLeft =
		() => {

			carouselRef.current
				.scrollBy({

					left: -350,

					behavior: "smooth"
				});
		};

	const scrollRight =
		() => {

			carouselRef.current
				.scrollBy({

					left: 350,

					behavior: "smooth"
				});
		};

	return (

		<section
			className="carousel-section">

			<div
				className="carousel-header">

				<h2>

					Popular Products

				</h2>

				<div
					className="carousel-controls">

					<button
						onClick={
							scrollLeft
						}>

						❮

					</button>

					<button
						onClick={
							scrollRight
						}>

						❯

					</button>

				</div>

			</div>

			<div

				ref={
					carouselRef
				}

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