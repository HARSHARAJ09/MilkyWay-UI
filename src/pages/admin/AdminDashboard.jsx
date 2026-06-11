import React,
{
	useEffect,
	useState
}
from "react";

import "../../assets/css/admin/AdminDashboard.css";

const AdminDashboard = () => {

	const [stats,
		setStats] =
		useState({

			users: 0,

			products: 0,

			orders: 0,

			subscriptions: 0
		});

	useEffect(() => {

		// API Integration Later

		setStats({

			users: 10,

			products: 25,

			orders: 30,

			subscriptions: 12
		});

	}, []);

	return (

		<div
			className="admin-dashboard">

			<h1>

				Admin Dashboard

			</h1>

			<div
				className="admin-cards">

				<div
					className="dashboard-card">

					<h2>

						{
							stats.users
						}

					</h2>

					<p>

						Users

					</p>

				</div>

				<div
					className="dashboard-card">

					<h2>

						{
							stats.products
						}

					</h2>

					<p>

						Products

					</p>

				</div>

				<div
					className="dashboard-card">

					<h2>

						{
							stats.orders
						}

					</h2>

					<p>

						Orders

					</p>

				</div>

				<div
					className="dashboard-card">

					<h2>

						{
							stats.subscriptions
						}

					</h2>

					<p>

						Subscriptions

					</p>

				</div>

			</div>

		</div>
	);
};

export default AdminDashboard;