import React,
{
	useEffect,
	useState
}
from "react";

import {
	Link
}
from "react-router-dom";

import userService
	from "../services/userService";

import "../assets/css/ProfileDropdown.css";

const ProfileDropdown = () => {

	const [open,
		setOpen] =
		useState(false);

	const [user,
		setUser] =
		useState(null);

	const role =
		localStorage.getItem(
			"role"
		);

	useEffect(() => {

		loadProfile();

	}, []);

	const loadProfile =
		async () => {

			try {

				const response =
					await userService
						.getProfile();

				setUser(
					response.data
				);

			} catch (error) {

				console.log(
					error
				);
			}
		};

	const closeDropdown =
		() => {

			setOpen(false);
		};

	const avatarLetter =

		user?.firstName

			?.charAt(0)

			.toUpperCase()

		||

		"U";

	return (

		<div
			className="profile-dropdown">

			<button

				className="profile-btn"

				onClick={() =>
					setOpen(
						!open
					)
				}>

				<div
					className="profile-avatar-small">

					{
						avatarLetter
					}

				</div>

				<span>

					{
						user?.firstName
						||

						"Account"
					}

				</span>

			</button>

			{
				open &&

				<div
					className="dropdown-menu">

					<div
						className="dropdown-user">

						<div
							className="dropdown-avatar">

							{
								avatarLetter
							}

						</div>

						<div>

							<h4>

								{
									user?.firstName
								}

								{" "}

								{
									user?.lastName
								}

							</h4>

							<p>

								{
									user?.email
								}

							</p>

						</div>

					</div>

					<Link
						to="/dashboard"
						onClick={
							closeDropdown
						}>

						Dashboard

					</Link>

					<Link
						to="/profile"
						onClick={
							closeDropdown
						}>

						My Profile

					</Link>

					<Link
						to="/orders"
						onClick={
							closeDropdown
						}>

						My Orders

					</Link>

					<Link
						to="/subscriptions"
						onClick={
							closeDropdown
						}>

						Subscriptions

					</Link>

					{
						role ===
						"ROLE_ADMIN"

						&&

						<Link
							to="/admin"
							onClick={
								closeDropdown
							}>

							Admin Dashboard

						</Link>
					}

				</div>
			}

		</div>
	);
};

export default ProfileDropdown;