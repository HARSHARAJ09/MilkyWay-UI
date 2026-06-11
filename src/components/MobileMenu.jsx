import React from "react";

import {
	Link
}
from "react-router-dom";

import {
	FaTimes
}
from "react-icons/fa";

import "../assets/css/MobileMenu.css";

const MobileMenu = ({
	isOpen,
	closeMenu
}) => {

	const role =
		localStorage.getItem(
			"role"
		);

	return (

		<>

			{
				isOpen &&

				<div

					className="mobile-overlay"

					onClick={
						closeMenu
					}
				/>
			}

			<div

				className={
					isOpen
					?
					"mobile-menu active"
					:
					"mobile-menu"
				}>

				<div
					className="mobile-header">

					<div>

						<h2>

							Milky-Way

						</h2>

						<p>

							Fresh Dairy Daily

						</p>

					</div>

					<button
						onClick={
							closeMenu
						}>

						<FaTimes />

					</button>

				</div>

				<ul>

					<li>

						<Link

							to="/home"

							onClick={
								closeMenu
							}>

							Home

						</Link>

					</li>

					<li>

						<Link

							to="/products"

							onClick={
								closeMenu
							}>

							Products

						</Link>

					</li>

					<li>

						<Link

							to="/cart"

							onClick={
								closeMenu
							}>

							Cart

						</Link>

					</li>

					<li>

						<Link

							to="/orders"

							onClick={
								closeMenu
							}>

							Orders

						</Link>

					</li>

					<li>

						<Link

							to="/dashboard"

							onClick={
								closeMenu
							}>

							Dashboard

						</Link>

					</li>

					<li>

						<Link

							to="/subscriptions"

							onClick={
								closeMenu
							}>

							Subscriptions

						</Link>

					</li>

					<li>

						<Link

							to="/profile"

							onClick={
								closeMenu
							}>

							Profile

						</Link>

					</li>

					{
						role ===
						"ROLE_ADMIN"

						&&

						<>

							<li>

								<Link

									to="/admin"

									onClick={
										closeMenu
									}>

									Admin Dashboard

								</Link>

							</li>

							<li>

								<Link

									to="/admin/products"

									onClick={
										closeMenu
									}>

									Manage Products

								</Link>

							</li>

						</>
					}

				</ul>

			</div>

		</>
	);
};

export default MobileMenu;