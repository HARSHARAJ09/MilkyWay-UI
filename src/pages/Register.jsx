import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import authService from "../services/authService";

import "../assets/css/Register.css";

const Register = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({

		firstName: "",

		lastName: "",

		email: "",

		phone: "",

		password: ""
	});

	const [message, setMessage] = useState("");

	const handleChange = (event) => {

		setFormData({

			...formData,

			[event.target.name]:
				event.target.value
		});
	};

	const handleSubmit = async (event) => {

		event.preventDefault();

		try {

			const response =
				await authService.register(
						formData);

			setMessage(response.data);

			setTimeout(() => {

				navigate("/");

			}, 2000);

		} catch (error) {

			setMessage(
				"Registration Failed");
		}
	};

	return (

		<div className="register-page">

			<form
				onSubmit={handleSubmit}
				className="register-form">

				<h2>
					Milky-Way Register
				</h2>

				{
					message &&
					<p>{message}</p>
				}

				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					onChange={handleChange}
					required
				/>

				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="phone"
					placeholder="Phone Number"
					onChange={handleChange}
					required
				/>

				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
					required
				/>

				<button type="submit">

					Register

				</button>

			</form>

		</div>
	);
};

export default Register;