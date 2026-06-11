import React,
{
	useEffect,
	useState
}
from "react";

import {
	useNavigate
}
from "react-router-dom";

import dashboardService
	from "../services/dashboardService";

import subscriptionService
	from "../services/subscriptionService";

import userService
	from "../services/userService";

import "../assets/css/Dashboard.css";

const Dashboard = () => {

	const navigate =
		useNavigate();

	const [user,
		setUser] =
		useState(null);

	const [orders,
		setOrders] =
		useState([]);

	const [addresses,
		setAddresses] =
		useState([]);

	const [subscriptions,
		setSubscriptions] =
		useState([]);

	const loadDashboard =
		async () => {

			try {

				const profileResponse =
					await userService
						.getProfile();

				setUser(
					profileResponse.data
				);

				const dashboardResponse =
					await dashboardService
						.getDashboardData();

				setOrders(
					dashboardResponse.orders || []
				);

				setAddresses(
					dashboardResponse.addresses || []
				);

				const subscriptionResponse =
					await subscriptionService
						.getMySubscriptions();

				setSubscriptions(
					subscriptionResponse.data || []
				);

			}
			catch (error) {

				console.log(error);
			}
		};

	useEffect(() => {

		loadDashboard();

	}, []);

	const activeSubscriptions =
		subscriptions.filter(
			sub =>
				sub.subscriptionStatus ===
				"ACTIVE"
		).length;

	const totalSpent =
		orders.reduce(
			(total, order) =>
				total +
				(order.totalAmount || 0),
			0
		);

	const firstLetter =

		user?.firstName

			?.charAt(0)

			.toUpperCase()

		||

		"U";

	return (

		<div className="dashboard-page">

			<div className="dashboard-welcome">

				<div className="dashboard-avatar">

					{firstLetter}

				</div>

				<div>

					<h1>

						Welcome,

						{" "}

						{
							user?.firstName
						}

					</h1>

					<p>

						Manage your dairy
						deliveries and orders

					</p>

				</div>

			</div>

			<div className="subscription-banner">

				<h3>

					Active Subscription

				</h3>

				<p>

					{
						activeSubscriptions > 0

						?

						`${activeSubscriptions} Active Plan(s)`

						:

						"No Active Subscription"
					}

				</p>

			</div>

			<div className="stats-grid">

				<div className="stat-card">

					<h2>

						{
							orders.length
						}

					</h2>

					<p>

						Orders

					</p>

				</div>

				<div className="stat-card">

					<h2>

						{
							addresses.length
						}

					</h2>

					<p>

						Addresses

					</p>

				</div>

				<div className="stat-card">

					<h2>

						{
							activeSubscriptions
						}

					</h2>

					<p>

						Subscriptions

					</p>

				</div>

				<div className="stat-card">

					<h2>

						₹
						{
							totalSpent
						}

					</h2>

					<p>

						Total Spent

					</p>

				</div>

			</div>

			<div className="quick-actions">

				<button
					onClick={() =>
						navigate("/products")
					}>

					Order Products

				</button>

				<button
					onClick={() =>
						navigate("/subscriptions")
					}>

					Manage Subscription

				</button>

				<button
					onClick={() =>
						navigate("/profile")
					}>

					Add Address

				</button>

			</div>

			<div className="dashboard-grid">

				<div className="dashboard-section">

					<h2>

						Recent Orders

					</h2>

					{
						orders.length === 0

						?

						<p>

							No Orders Yet

						</p>

						:

						orders
							.slice(0, 5)
							.map(order => (

								<div
									key={order.orderId}
									className="dashboard-item">

									<span>

										Order #
										{
											order.orderId
										}

									</span>

									<span>

										₹
										{
											order.totalAmount
										}

									</span>

								</div>
							))
					}

				</div>

				<div className="dashboard-section">

					<h2>

						Delivery Status

					</h2>

					<div className="delivery-card">

						<h4>

							Next Delivery

						</h4>

						<p>

							Available After
							Delivery Module

						</p>

					</div>

				</div>

				<div className="dashboard-section">

					<h2>

						My Addresses

					</h2>

					{
						addresses
							.slice(0, 5)
							.map(address => (

								<div
									key={
										address.addressId
									}
									className="dashboard-item">

									{
										address.addressLine1
									}

									,

									{" "}

									{
										address.city
									}

								</div>
							))
					}

				</div>

			</div>

		</div>
	);
};

export default Dashboard;