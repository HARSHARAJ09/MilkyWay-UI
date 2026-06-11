import React from "react";

import "../assets/css/SidebarFilter.css";

const SidebarFilter = ({
	categories,
	selectedCategory,
	setSelectedCategory
}) => {

	return (

		<div
			className="sidebar">

			<h3>

				Categories

			</h3>

			<button

				className={
					selectedCategory === ""

					?

					"category-btn active"

					:

					"category-btn"
				}

				onClick={() =>
					setSelectedCategory(
						""
					)
				}>

				All Products

			</button>

			{
				categories.map(
					category => (

						<button

							key={
								category.id
							}

							className={
								selectedCategory ===
								category.categoryName

								?

								"category-btn active"

								:

								"category-btn"
							}

							onClick={() =>
								setSelectedCategory(
									category.categoryName
								)
							}>

							{
								category.categoryName
							}

						</button>
					))
			}

		</div>
	);
};

export default SidebarFilter;