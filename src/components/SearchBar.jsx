import React from "react";

import "../assets/css/SearchBar.css";

const SearchBar = ({
	search,
	setSearch
}) => {

	return (

		<input className="search-input"

			type="text"

			placeholder="Search Milk, Paneer, Ghee..."

			value={search}

			onChange={(event) =>

				setSearch(
					event.target.value)
			}
		/>
	);
};

export default SearchBar;