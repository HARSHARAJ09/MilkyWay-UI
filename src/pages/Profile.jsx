import React,
{
	useEffect,
	useState
}
from "react";

import addressService
	from "../services/addressService";

import userService
	from "../services/userService";

import orderService
	from "../services/orderService";

import subscriptionService
	from "../services/subscriptionService";

import AddressForm
	from "../components/AddressForm";

import "../assets/css/Profile.css";

const Profile = () => {

	const [user,
		setUser] =
		useState(null);

	const [addresses,
		setAddresses] =
		useState([]);

	const [orders,
		setOrders] =
		useState([]);

	const [subscriptions,
		setSubscriptions] =
		useState([]);

	const [editingAddress,
		setEditingAddress] =
		useState(null);

	const [showForm,
		setShowForm] =
		useState(false);

	const loadData =
		async () => {

			try {

				const profileResponse =
					await userService
						.getProfile();

				setUser(
					profileResponse.data
				);

				const addressResponse =
					await addressService
						.getAddresses();

				setAddresses(
					addressResponse.data
				);

				try {

					const ordersResponse =
						await orderService
							.getMyOrders();

					setOrders(
						ordersResponse.data || []
					);

				} catch {

					setOrders([]);
				}

				try {

					const subscriptionResponse =
						await subscriptionService
							.getMySubscriptions();

					setSubscriptions(
						subscriptionResponse.data || []
					);

				} catch {

					setSubscriptions([]);
				}

			} catch (error) {

				console.log(error);
			}
		};

	useEffect(() => {

		loadData();

	}, []);

	const handleAddAddress =
		async (data) => {

			try {

				await addressService
					.addAddress(data);

				setShowForm(false);

				loadData();

			} catch (error) {

				console.log(error);
			}
		};

	const handleUpdateAddress =
		async (data) => {

			try {

				await addressService
					.updateAddress(
						editingAddress.addressId,
						data
					);

				setEditingAddress(null);

				setShowForm(false);

				loadData();

			} catch (error) {

				console.log(error);
			}
		};

	const handleDeleteAddress =
		async (addressId) => {

			const confirmDelete =
				window.confirm(
					"Delete this address?"
				);

			if (!confirmDelete) {

				return;
			}

			try {

				await addressService
					.deleteAddress(
						addressId
					);

				loadData();

			} catch (error) {

				console.log(error);
			}
		};

	return (

		<div className="profile-page">

			{
				user &&

				<div className="profile-header">

					<div className="profile-avatar">

						{
							user.firstName
								?.charAt(0)
								.toUpperCase()
						}

					</div>

					{/* <div className="profile-info">

						<h2>

							{
								user.firstName
							}

							{" "}

							{
								user.lastName
							}

						</h2>

						<p>

							{
								user.email
							}

						</p>

						<p>

							{
								user.phone
							}

						</p>

						<span
							className="member-badge">

							Milky-Way Customer

						</span>

					</div> */}
					<div className="profile-info">

	<h2>

		{user.firstName}
		{" "}
		{user.lastName}

	</h2>

	<p>

		{user.email}

	</p>

	<p>

		{user.phone}

	</p>

	<span
		className="member-badge">

		Premium Dairy Customer

	</span>

</div>

				</div>
			}
<div className="profile-stats">

	<div className="stat-card">

		<h3>{orders.length}</h3>

		<p>Total Orders</p>

	</div>

	<div className="stat-card">

		<h3>{addresses.length}</h3>

		<p>Saved Addresses</p>

	</div>

	<div className="stat-card">

		<h3>{subscriptions.length}</h3>

		<p>Subscriptions</p>

	</div>

	<div className="stat-card">

		<h3>

			{
				subscriptions.filter(
					sub =>
						sub.subscriptionStatus ===
						"ACTIVE"
				).length
			}

		</h3>

		<p>Active Plans</p>

	</div>

</div>
			{/* <div className="profile-stats">

				<div className="stat-card">

					<h3>

						{
							orders.length
						}

					</h3>

					<p>

						Orders

					</p>

				</div>

				<div className="stat-card">

					<h3>

						{
							addresses.length
						}

					</h3>

					<p>

						Addresses

					</p>

				</div>

				<div className="stat-card">

					<h3>

						{
							subscriptions.length
						}

					</h3>

					<p>

						Subscriptions

					</p>

				</div>

			</div> */}

			<div className="profile-section">

				<h1>

					My Addresses

				</h1>

				<button

					className="add-address-btn"

					onClick={() => {

						setEditingAddress(null);

						setShowForm(
							!showForm
						);

					}}>

					{
						showForm

						?

						"Close"

						:

						"Add Address"
					}

				</button>

			</div>

			{
				showForm &&

				<AddressForm

					onSubmit={
						editingAddress

						?

						handleUpdateAddress

						:

						handleAddAddress
					}

					initialData={
						editingAddress
					}
				/>
			}

			<div className="address-grid">

				{
					addresses.length === 0

					?

					// <div
					// 	className="empty-state">

					// 	<h3>

					// 		No Addresses Found

					// 	</h3>

					// 	<p>

					// 		Add your first delivery address.

					// 	</p>

					// </div>
					<div className="empty-state">

	<h3>

		No Delivery Address Found

	</h3>

	<p>

		Add your first delivery address
		to start ordering products.

	</p>

</div>

					:

					addresses.map(
						address => (

							<div

								key={
									address.addressId
								}

								className="address-card">

								<h3>

									{
										address.addressLine1
									}

								</h3>

								<p>

									{
										address.addressLine2
									}

								</p>

								<p>

									{
										address.city
									},

									{" "}

									{
										address.state
									}

								</p>

								<p>

									{
										address.pincode
									}

								</p>

								{
									address.landmark &&

									<p>

										Landmark:

										{" "}

										{
											address.landmark
										}

									</p>
								}

								{
									address.defaultAddress &&

									<span
										className="default-badge">

										Default Address

									</span>
								}

								<div
									className="address-actions">

									<button

										onClick={() => {

											setEditingAddress(
												address
											);

											setShowForm(
												true
											);

										}}>

										Edit

									</button>

									<button

										onClick={() =>
											handleDeleteAddress(
												address.addressId
											)
										}>

										Delete

									</button>

								</div>

							</div>
						))
				}

			</div>

		</div>
	);
};

export default Profile;