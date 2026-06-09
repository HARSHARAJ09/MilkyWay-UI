import React from "react";

const SidebarFilter = ({
	categories,
    selectedCategory,
	setSelectedCategory
}) => {

	return (

		<div className="sidebar">

			<h3>

				Categories

			</h3>
<button
				onClick={() =>
					setSelectedCategory(
						"")
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

							onClick={() =>
								setSelectedCategory(
									category.categoryName)
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