import React,
{
	useState
}
from "react";

import {
	Link,
	useNavigate
} from "react-router-dom";

import { useAuth }
	from "../context/AuthContext";

import "../assets/css/Navbar.css";
import {
	FaBars
}
from "react-icons/fa";
import MobileMenu
	from "./MobileMenu";

const Navbar = () => {

	const navigate =
		useNavigate();

		const [cartCount,
	setCartCount] =
	useState(0); // Replace with actual cart count from context or state
	// const cartCount = 0; // Replace with actual cart count from context or state

	const {
		logout
	} = useAuth();

	const handleLogout = () => {

		logout();

		navigate("/");
	};

	const [isMenuOpen,
	setIsMenuOpen] =
	useState(false);

	// const toggleMenu = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

// 	useEffect(() => {// Load cart count from when local storage or API is to used

// 	loadCartCount();

// }, []);

	return (

		<nav className="navbar">

			<div
				className="logo">

				Milky-Way

			</div>
			<button
	className="menu-btn"
	onClick={() =>
		setIsMenuOpen(true)
	}>

	<FaBars />

</button>

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
						<span> ({ cartCount }) </span>
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

			<MobileMenu

	isOpen={
		isMenuOpen
	}

	closeMenu={() =>
		setIsMenuOpen(false)
	}
/>

		</nav>
	);
};

export default Navbar;