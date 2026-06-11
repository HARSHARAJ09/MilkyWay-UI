import React from "react";

import {
	FaSearch
}
from "react-icons/fa";

import "../assets/css/SearchBar.css";

const SearchBar = ({
	search,
	setSearch
}) => {

	return (

		<div
			className="search-container">

			<FaSearch
				className="search-icon"
			/>

			<input

				className="search-input"

				type="text"

				placeholder="Search Milk, Curd, Paneer, Ghee..."

				value={search}

				onChange={(event) =>
					setSearch(
						event.target.value
					)
				}
			/>

		</div>
	);
};

export default SearchBar;