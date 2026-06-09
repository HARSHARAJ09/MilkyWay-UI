import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import authService from "../services/authService";

import "../assets/css/common.css";
import "../assets/css/Login.css";

const Login = () => {

	const navigate = useNavigate();

	const [loginData, setLoginData] = useState({

		email: "",

		password: ""
	});

	const [error, setError] = useState("");

	const handleChange = (event) => {

		setLoginData({

			...loginData,

			[event.target.name]:
				event.target.value
		});
	};

	const handleSubmit = async (event) => {

		event.preventDefault();

		try {

			const response =
				await authService.login(
					loginData);

			localStorage.setItem(
				"token",
				response.data.token);

			localStorage.setItem(
				"role",
				response.data.role);

			navigate("/");

		} catch (error) {

			setError(
				"Invalid Email or Password");
		}
	};

	return (

		<div className="login-page">

			<form
				onSubmit={handleSubmit}
				className="login-form">

				<h2>
					Milky-Way Login
				</h2>

				{
					error &&
					<p>{error}</p>
				}

				<input
					type="email"
					name="email"
					placeholder="Enter Email"
					value={loginData.email}
					onChange={handleChange}
					required
				/>

				<input
					type="password"
					name="password"
					placeholder="Enter Password"
					value={loginData.password}
					onChange={handleChange}
					required
				/>

				<button type="submit">

					Login

				</button>

			</form>

		</div>
	);
};

export default Login;