import React from "react";

import "../assets/css/FeaturedCategories.css";

const FeaturedCategories = () => {

	const categories = [

		"Milk",

		"Curd",

		"Paneer",

		"Butter",

		"Ghee",

		"Cheese"
	];

	return (

		<section className="categories-section">

			<h2>

				Shop By Category

			</h2>

			<div className="categories-grid">

				{
					categories.map(
						category => (

							<div
								key={
									category
								}
								className="category-box">

								{
									category
								}

							</div>
						))
				}

			</div>

		</section>
	);
};

export default FeaturedCategories;