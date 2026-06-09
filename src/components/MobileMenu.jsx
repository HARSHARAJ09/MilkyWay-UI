import React from "react";

import {
	Link
} from "react-router-dom";

import {
	FaTimes
} from "react-icons/fa";

import "../assets/css/MobileMenu.css";

const MobileMenu = ({
	isOpen,
	closeMenu
}) => {

	return (

		<div
			className={
				isOpen
					? "mobile-menu active"
					: "mobile-menu"
			}>

			<div
				className="mobile-header">

				<h2>

					Milky-Way

				</h2>

				<button
					onClick={closeMenu}>

					<FaTimes />

				</button>

			</div>

			<ul>

				<li>

					<Link
						to="/home"
						onClick={closeMenu}>

						Home

					</Link>

				</li>

				<li>

					<Link
						to="/products"
						onClick={closeMenu}>

						Products

					</Link>

				</li>

				<li>

					<Link
						to="/cart"
						onClick={closeMenu}>

						Cart

					</Link>

				</li>

				<li>

					<Link
						to="/orders"
						onClick={closeMenu}>

						Orders

					</Link>

				</li>

			</ul>

		</div>
	);
};

export default MobileMenu;