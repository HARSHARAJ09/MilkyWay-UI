import React from "react";

import {
	FaTag
}
from "react-icons/fa";

import "../assets/css/CategoryCard.css";

const CategoryCard = ({
	category
}) => {

	return (

		<div
			className="category-card">

			<div
				className="category-icon">

				<FaTag />

			</div>

			<h3
				className="category-title">

				{
					category.categoryName
				}

			</h3>

			<p
				className="category-subtitle">

				Fresh Dairy Collection

			</p>

		</div>
	);
};

export default CategoryCard;