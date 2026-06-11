import React,
{
	useEffect,
	useState
}
from "react";

import addressService
	from "../services/addressService";

import AddressForm
	from "../components/AddressForm";

import "../assets/css/Profile.css";

const Profile = () => {

	const [addresses,
		setAddresses] =
		useState([]);

	const [editingAddress,
		setEditingAddress] =
		useState(null);

	const loadAddresses =
		async () => {

			try {

				const response =
					await addressService
						.getAddresses();

				setAddresses(
					response.data);

			} catch (error) {

				console.log(error);
			}
		};

	useEffect(() => {

		loadAddresses();

	}, []);

	const handleAddAddress =
		async (data) => {

			await addressService
				.addAddress(data);

			loadAddresses();
		};

	const handleUpdateAddress =
		async (data) => {

			await addressService
				.updateAddress(
					editingAddress.addressId,
					data);

			setEditingAddress(
				null);

			loadAddresses();
		};

	const handleDeleteAddress =
		async (addressId) => {

			await addressService
				.deleteAddress(
					addressId);

			loadAddresses();
		};

	return (

		<div
			className="profile-page">

			<h1>

				My Addresses

			</h1>

			<button

	className="add-address-btn"

	onClick={() =>
		setEditingAddress(
			null)
	}>

	Add New Address

</button>

			<AddressForm

				onSubmit={
					editingAddress
					? handleUpdateAddress
					: handleAddAddress
				}

				initialData={
					editingAddress
				}
			/>

			<div
				className="address-grid">

				{
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
										address.city
									},
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
									address.defaultAddress &&

									<span>

										Default

									</span>
								}

								<div
									className="address-actions">

									<button

										onClick={() =>
											setEditingAddress(
												address)
										}>

										Edit

									</button>

									<button

										onClick={() =>
											handleDeleteAddress(
												address.addressId)
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