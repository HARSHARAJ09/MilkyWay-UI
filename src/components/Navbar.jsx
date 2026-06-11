import React,
{
	useState
}
from "react";

import {
	Link,
	useNavigate
}
from "react-router-dom";

import {
	FaBars
}
from "react-icons/fa";

import {
	useAuth
}
from "../context/AuthContext";

import {
	useCart
}
from "../context/CartContext";

import MobileMenu
	from "./MobileMenu";

import ProfileDropdown
	from "./ProfileDropdown";

import "../assets/css/Navbar.css";

const Navbar = () => {

	const navigate =
		useNavigate();

	const [isMenuOpen,
		setIsMenuOpen] =
		useState(false);

	const {
		cartCount
	} = useCart();

	const {
		logout
	} = useAuth();

	const role =
		localStorage.getItem(
			"role");

	const handleLogout =
		() => {

			logout();

			navigate("/");
		};

	return (

		<nav
			className="navbar">

			<Link
				to="/home"
				className="logo">

				Milky-Way

			</Link>

			<button
				className="menu-btn"
				onClick={() =>
					setIsMenuOpen(
						true)
				}>

				<FaBars />

			</button>

			<ul
				className="nav-links">

				<li>
					<Link
						to="/home">

						Home

					</Link>
				</li>

				<li>
					<Link
						to="/products">

						Products

					</Link>
				</li>

				{
					role ===
					"ROLE_CUSTOMER" &&

					<>

						<li>

							<Link
								to="/cart">

								Cart

								<span
									className="cart-badge">

									{
										cartCount
									}

								</span>

							</Link>

						</li>

						<li>

							<Link
								to="/orders">

								Orders

							</Link>

						</li>

						<li>

							<Link
								to="/dashboard">

								Dashboard

							</Link>

						</li>

						<li>

							<Link
								to="/subscriptions">

								Subscriptions

							</Link>

						</li>

					</>
				}

				{
					role ===
					"ROLE_ADMIN" &&

					<li>

						<Link
							to="/admin">

							Admin Dashboard

						</Link>

					</li>
				}

			</ul>

			<div
				className="navbar-right">

				<ProfileDropdown />

				<button
					className="logout-btn"
					onClick={
						handleLogout
					}>

					Logout

				</button>

			</div>

			<MobileMenu

				isOpen={
					isMenuOpen
				}

				closeMenu={() =>
					setIsMenuOpen(
						false)
				}
			/>

		</nav>
	);
};

export default Navbar;