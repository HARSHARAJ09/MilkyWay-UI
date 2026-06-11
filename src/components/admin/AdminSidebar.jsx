import React from "react";

import {
	Link
}
from "react-router-dom";

import "../../assets/css/admin/AdminSidebar.css";

const AdminSidebar = () => {

	return (

		<div
			className="admin-sidebar">

			<h2>

				Milky-Way

			</h2>

			<Link
				to="/admin">

				Dashboard

			</Link>

			<Link
				to="/admin/products">

				Products

			</Link>

			<Link
				to="/admin/categories">

				Categories

			</Link>

			<Link
				to="/admin/orders">

				Orders

			</Link>

			<Link
				to="/admin/users">

				Users

			</Link>

			<Link
				to="/admin/subscriptions">

				Subscriptions

			</Link>

		</div>
	);
};

export default AdminSidebar;