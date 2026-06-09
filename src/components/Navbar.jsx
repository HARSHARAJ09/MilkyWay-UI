import React from "react";

import {
	Link,
	useNavigate
} from "react-router-dom";

import { useAuth }
	from "../context/AuthContext";

import "../assets/css/Navbar.css";

const Navbar = () => {

	const navigate =
		useNavigate();

	const {
		logout
	} = useAuth();

	const handleLogout = () => {

		logout();

		navigate("/");
	};

	return (

		<nav className="navbar">

			<div
				className="logo">

				Milky-Way

			</div>

			<ul
				className="nav-links">

				<li>
					<Link to="/home">
						Home
					</Link>
				</li>

				<li>
					<Link to="/products">
						Products
					</Link>
				</li>

				<li>
					<Link to="/cart">
						Cart
					</Link>
				</li>

				<li>
					<Link to="/orders">
						Orders
					</Link>
				</li>

			</ul>

			<button
				onClick={handleLogout}>

				Logout

			</button>

		</nav>
	);
};

export default Navbar;