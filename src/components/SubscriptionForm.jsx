import React,
{
	useState
}
from "react";

const SubscriptionForm = ({
	products,
	onSubmit
}) => {

	const [formData,
		setFormData] =
		useState({

			productId: "",

			quantity: 1,

			frequency: "DAILY",

			startDate: "",

			endDate: ""
		});

	const handleChange =
		(event) => {

			setFormData({

				...formData,

				[event.target.name]:
					event.target.value
			});
		};

	const handleSubmit =
		(event) => {

			event.preventDefault();

			if (
				new Date(
					formData.endDate
				) <

				new Date(
					formData.startDate
				)
			) {

				alert(
					"End Date must be after Start Date"
				);

				return;
			}

			onSubmit(
				formData
			);

			setFormData({

				productId: "",

				quantity: 1,

				frequency: "DAILY",

				startDate: "",

				endDate: ""
			});
		};

	return (

		<form
			className="subscription-form"
			onSubmit={handleSubmit}>

			<h2>

				Create New Subscription

			</h2>

			<div
				className="form-group">

				<label>

					Product

				</label>

				<select

					name="productId"

					value={
						formData.productId
					}

					onChange={
						handleChange
					}

					required>

					<option value="">

						Select Product

					</option>

					{
						products.map(
							product => (

								<option

									key={
										product.id
									}

									value={
										product.id
									}>

									{
										product.productName
									}

								</option>
							))
					}

				</select>

			</div>

			<div
				className="form-group">

				<label>

					Quantity

				</label>

				<input

					type="number"

					name="quantity"

					value={
						formData.quantity
					}

					onChange={
						handleChange
					}

					min="1"

					required
				/>

			</div>

			<div
				className="form-group">

				<label>

					Delivery Frequency

				</label>

				<select

					name="frequency"

					value={
						formData.frequency
					}

					onChange={
						handleChange
					}>

					<option value="DAILY">

						Daily

					</option>

					<option value="ALTERNATE_DAY">

						Alternate Day

					</option>

					<option value="WEEKLY">

						Weekly

					</option>

				</select>

			</div>

			<div
				className="form-row">

				<div
					className="form-group">

					<label>

						Start Date

					</label>

					<input

						type="date"

						name="startDate"

						value={
							formData.startDate
						}

						onChange={
							handleChange
						}

						required
					/>

				</div>

				<div
					className="form-group">

					<label>

						End Date

					</label>

					<input

						type="date"

						name="endDate"

						value={
							formData.endDate
						}

						onChange={
							handleChange
						}

						required
					/>

				</div>

			</div>

			<button
				type="submit">

				Create Subscription

			</button>

		</form>
	);
};

export default SubscriptionForm;