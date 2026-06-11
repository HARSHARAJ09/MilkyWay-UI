import React,
{
	useEffect,
	useState
}
from "react";

import dashboardService
	from "../services/dashboardService";

import "../assets/css/Dashboard.css";

const Dashboard = () => {

	const [orders,
		setOrders] =
		useState([]);

	const [addresses,
		setAddresses] =
		useState([]);

	const loadDashboard =
		async () => {

			try {

				const response =
					await dashboardService
						.getDashboardData();

				setOrders(
					response.orders);

				setAddresses(
					response.addresses);

			} catch (error) {

				console.log(
					error);
			}
		};

	useEffect(() => {

		loadDashboard();

	}, []);

	return (

		<div
			className="dashboard-page">

			<h1>

				My Dashboard

			</h1>

			<div
				className="stats-grid">

				<div
					className="stat-card">

					<h2>

						{
							orders.length
						}

					</h2>

					<p>

						Total Orders

					</p>

				</div>

				<div
					className="stat-card">

					<h2>

						{
							addresses.length
						}

					</h2>

					<p>

						Addresses

					</p>

				</div>

			</div>

			<div
				className="dashboard-section">

				<h2>

					Recent Orders

				</h2>

				{
					orders.slice(
						0,
						5)
						.map(
							order => (

								<div

									key={
										order.orderId
									}

									className="dashboard-order">

									Order #
									{
										order.orderId
									}

									-
									₹
									{
										order.totalAmount
									}

								</div>
							))
				}

			</div>

			<div
				className="dashboard-section">

				<h2>

					My Addresses

				</h2>

				{
					addresses.map(
						address => (

							<div

								key={
									address.addressId
								}

								className="dashboard-address">

								{
									address.addressLine1
								}

								,
								{
									address.city
								}

							</div>
						))
				}

			</div>

		</div>
	);
};

export default Dashboard;