import React from "react";

import "../assets/css/CategoryCard.css";

const CategoryCard = ({
	category
}) => {

	return (

		<div className="category-card">

			<h3>
				{category.categoryName}
			</h3>

		</div>
	);
};

export default CategoryCard;