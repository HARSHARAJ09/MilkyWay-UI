import React from "react";

import {
	FaGlassWhiskey,
	FaCheese,
	FaCookieBite
}
from "react-icons/fa";

import {
	GiButter,
	GiMilkCarton,
	GiCakeSlice
}
from "react-icons/gi";

import "../assets/css/FeaturedCategories.css";

const FeaturedCategories = () => {

	const categories = [

		{
			name: "Milk",
			icon: <GiMilkCarton />
		},

		{
			name: "Curd",
			icon: <FaGlassWhiskey />
		},

		{
			name: "Paneer",
			icon: <FaCheese />
		},

		{
			name: "Butter",
			icon: <GiButter />
		},

		{
			name: "Ghee",
			icon: <GiCakeSlice />
		},

		{
			name: "Cheese",
			icon: <FaCookieBite />
		}
	];

	return (

		<section
			className="featured-categories">

			<div
				className="section-header">

				<h2>

					Popular Categories

				</h2>

				<p>

					Explore fresh dairy products
					from trusted farms.

				</p>

			</div>

			<div
				className="categories-grid">

				{
					categories.map(
						category => (

							<div

								key={
									category.name
								}

								className="category-card">

								<div
									className="category-icon">

									{
										category.icon
									}

								</div>

								<h3>

									{
										category.name
									}

								</h3>

							</div>
						))
				}

			</div>

		</section>
	);
};

export default FeaturedCategories;