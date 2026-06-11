import React from "react";

import {
	FaMapMarkerAlt,
	FaCity,
	FaFlag,
	FaEdit,
	FaTrash
}
from "react-icons/fa";

import "../assets/css/AddressCard.css";

const AddressCard = ({

	address,

	onEdit,

	onDelete

}) => {

	return (

		<div
			className="address-card">

			{
				address.defaultAddress &&

				<span
					className="default-badge">

					Default

				</span>
			}

			<div
				className="address-icon">

				<FaMapMarkerAlt />

			</div>

			<h3>

				{
					address.addressLine1
				}

			</h3>

			<p>

				<FaCity />

				{
					address.city
				}

			</p>

			<p>

				<FaFlag />

				{
					address.state
				}

			</p>

			<p>

				Pincode :
				{
					address.pincode
				}

			</p>

			<div
				className="address-actions">

				<button

					className="edit-btn"

					onClick={() =>
						onEdit(
							address
						)
					}>

					<FaEdit />

					Edit

				</button>

				<button

					className="delete-btn"

					onClick={() =>
						onDelete(
							address.addressId
						)
					}>

					<FaTrash />

					Delete

				</button>

			</div>

		</div>
	);
};

export default AddressCard;