import React,
{
	useState
}
from "react";

const AddressForm = ({

	onSubmit,

	initialData

}) => {

	const [formData,
		setFormData] =
		useState(

			initialData ||

			{
				addressLine1: "",
				addressLine2: "",
				city: "",
				state: "",
				pincode: "",
				landmark: "",
				defaultAddress: false
			});

	const handleChange =
		(event) => {

			const {
				name,
				value,
				type,
				checked
			} = event.target;

			setFormData({

				...formData,

				[name]:
					type === "checkbox"
					? checked
					: value
			});
		};

	const handleSubmit =
		(event) => {

			event.preventDefault();

			onSubmit(
				formData);
		};

	return (

		<form
			className="address-form"
			onSubmit={handleSubmit}>

			<input
				name="addressLine1"
				placeholder="Address Line 1"
				value={formData.addressLine1}
				onChange={handleChange}
				required
			/>

			<input
				name="addressLine2"
				placeholder="Address Line 2"
				value={formData.addressLine2}
				onChange={handleChange}
			/>

			<input
				name="city"
				placeholder="City"
				value={formData.city}
				onChange={handleChange}
				required
			/>

			<input
				name="state"
				placeholder="State"
				value={formData.state}
				onChange={handleChange}
				required
			/>

			<input
				name="pincode"
				placeholder="Pincode"
				value={formData.pincode}
				onChange={handleChange}
				required
			/>

			<input
				name="landmark"
				placeholder="Landmark"
				value={formData.landmark}
				onChange={handleChange}
			/>

			<label>

				<input
					type="checkbox"
					name="defaultAddress"
					checked={formData.defaultAddress}
					onChange={handleChange}
				/>

				Default Address

			</label>

			<button type="submit">

				Save Address

			</button>

		</form>
	);
};

export default AddressForm;