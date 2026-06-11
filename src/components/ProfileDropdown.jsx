import React,
{
	useState
}
from "react";

import {
	Link
}
from "react-router-dom";

import "../assets/css/ProfileDropdown.css";

const ProfileDropdown = () => {

	const [open,
		setOpen] =
		useState(false);

	return (

		<div className="profile-dropdown">

			<button

				className="profile-btn"

				onClick={() =>
					setOpen(!open)
				}>

				Profile

			</button>

			{
				open && (

					<div
						className="dropdown-menu">

						<Link
							to="/profile">

							My Profile

						</Link>

						<Link
							to="/orders">

							My Orders

						</Link>

						<Link
							to="/subscriptions">

							Subscriptions

						</Link>

					</div>
				)
			}

		</div>
	);
};

export default ProfileDropdown;