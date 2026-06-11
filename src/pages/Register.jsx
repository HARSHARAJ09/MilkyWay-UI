import React,
{
	useState
}
from "react";

import {
	Link,
	useNavigate
}
from "react-router-dom";

import {
	FaEye,
	FaEyeSlash
}
from "react-icons/fa";

import authService
	from "../services/authService";

import "../assets/css/Register.css";

const Register = () => {

	const navigate =
		useNavigate();

	const [showPassword,
		setShowPassword] =
		useState(false);

	const [loading,
		setLoading] =
		useState(false);

	const [error,
		setError] =
		useState("");

	const [success,
		setSuccess] =
		useState("");

	const [formData,
		setFormData] =
		useState({

			firstName: "",

			lastName: "",

			email: "",

			phone: "",

			password: ""
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
		async (event) => {

			event.preventDefault();

			setError("");

			setSuccess("");

			try {

				setLoading(true);

				const response =
					await authService
						.register(
							formData
						);

				setSuccess(
					response.data
				);

				setTimeout(() => {

					navigate("/");

				}, 2000);

			} catch (error) {

				setError(

					error.response?.data ||

					"Registration Failed"
				);

			} finally {

				setLoading(false);
			}
		};

	return (

		<div className="register-page">

			<form
				className="register-form"
				onSubmit={handleSubmit}>

				<h2>

					Create Account

				</h2>

				<p className="subtitle">

					Join Milky-Way Dairy

				</p>

				{
					error &&

					<div className="alert error">

						{error}

					</div>
				}

				{
					success &&

					<div className="alert success">

						{success}

					</div>
				}

				<div className="name-row">

					<input

						type="text"

						name="firstName"

						placeholder="First Name"

						value={
							formData.firstName
						}

						onChange={
							handleChange
						}

						required
					/>

					<input

						type="text"

						name="lastName"

						placeholder="Last Name"

						value={
							formData.lastName
						}

						onChange={
							handleChange
						}

						required
					/>

				</div>

				<input

					type="email"

					name="email"

					placeholder="Email Address"

					value={
						formData.email
					}

					onChange={
						handleChange
					}

					required
				/>

				<input

					type="tel"

					name="phone"

					placeholder="Phone Number"

					value={
						formData.phone
					}

					onChange={
						handleChange
					}

					required
				/>

				<div className="password-wrapper">

					<input

						type={
							showPassword

							?

							"text"

							:

							"password"
						}

						name="password"

						placeholder="Password"

						value={
							formData.password
						}

						onChange={
							handleChange
						}

						required
					/>

					<button

						type="button"

						className="toggle-password"

						onClick={() =>
							setShowPassword(
								!showPassword
							)
						}>

						{
							showPassword

							?

							<FaEyeSlash />

							:

							<FaEye />
						}

					</button>

				</div>

				<button

					type="submit"

					className="register-btn"

					disabled={loading}>

					{
						loading

						?

						"Creating Account..."

						:

						"Register"
					}

				</button>

				<p className="login-link">

					Already have an account?

					<Link to="/">

						Login

					</Link>

				</p>

			</form>

		</div>
	);
};

export default Register;