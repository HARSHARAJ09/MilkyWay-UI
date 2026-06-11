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

import "../assets/css/Login.css";

const Login = () => {

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

	const [loginData,
		setLoginData] =
		useState({

			email: "",

			password: ""
		});

	const handleChange =
		(event) => {

			setLoginData({

				...loginData,

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
						.login(
							loginData
						);

				localStorage.setItem(
					"token",
					response.data.token
				);

				localStorage.setItem(
					"role",
					response.data.role
				);

				if (
					response.data.role ===
					"ROLE_ADMIN"
				) {

					setSuccess(
						"Admin Login Successful"
					);

					setTimeout(() => {

						navigate(
							"/admin"
						);

					}, 1500);

				}
				else {

					setSuccess(
						"Login Successful"
					);

					setTimeout(() => {

						navigate(
							"/home"
						);

					}, 1500);
				}

			} catch (error) {

				setError(

					error.response?.data ||

					"Invalid Email Or Password"
				);

			} finally {

				setLoading(false);
			}
		};

	return (

		<div className="login-page">

			<form

				className="login-form"

				onSubmit={
					handleSubmit
				}>

				<h2>

					Welcome Back

				</h2>

				<p className="subtitle">

					Login To Milky-Way Dairy

				</p>

				{
					error &&

					<div
						className="alert error">

						{error}

					</div>
				}

				{
					success &&

					<div
						className="alert success">

						{success}

					</div>
				}

				<input

					type="email"

					name="email"

					placeholder="Email Address"

					value={
						loginData.email
					}

					onChange={
						handleChange
					}

					required
				/>

				<div
					className="password-wrapper">

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
							loginData.password
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

					className="login-btn"

					disabled={
						loading
					}>

					{
						loading

						?

						"Signing In..."

						:

						"Login"
					}

				</button>

				<p
					className="register-link">

					Don't have an account?

					<Link
						to="/register">

						Register

					</Link>

				</p>

			</form>

		</div>
	);
};

export default Login;