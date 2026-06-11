import React,
{
	useEffect,
	useState
}
from "react";

import subscriptionService
	from "../services/subscriptionService";

import productService
	from "../services/productService";

import SubscriptionForm
	from "../components/SubscriptionForm";

import SubscriptionCard
	from "../components/SubscriptionCard";

import "../assets/css/Subscriptions.css";

const Subscriptions = () => {

	const [products,
		setProducts] =
		useState([]);

	const [subscriptions,
		setSubscriptions] =
		useState([]);

	const [loading,
		setLoading] =
		useState(true);

	const loadData =
		async () => {

			try {

				setLoading(
					true
				);

				const productsResponse =
					await productService
						.getAllProducts();

				setProducts(
					productsResponse.data || []
				);

				const subscriptionsResponse =
					await subscriptionService
						.getMySubscriptions();

				setSubscriptions(
					subscriptionsResponse.data || []
				);

			}
			catch (error) {

				console.log(error);
			}
			finally {

				setLoading(
					false
				);
			}
		};

	useEffect(() => {

		loadData();

	}, []);

	const handleCreate =
		async (data) => {

			try {

				await subscriptionService
					.createSubscription(
						data
					);

				alert(
					"Subscription Created Successfully"
				);

				loadData();

			}
			catch (error) {

				console.log(error);

				alert(
					"Failed To Create Subscription"
				);
			}
		};

	const handlePause =
		async (subscriptionId) => {

			try {

				await subscriptionService
					.pauseSubscription(
						subscriptionId
					);

				loadData();

			}
			catch (error) {

				console.log(error);
			}
		};

	const handleResume =
		async (subscriptionId) => {

			try {

				await subscriptionService
					.resumeSubscription(
						subscriptionId
					);

				loadData();

			}
			catch (error) {

				console.log(error);
			}
		};

	const handleCancel =
		async (subscriptionId) => {

			const confirmed =
				window.confirm(
					"Are you sure you want to cancel this subscription?"
				);

			if (!confirmed) {

				return;
			}

			try {

				await subscriptionService
					.cancelSubscription(
						subscriptionId
					);

				loadData();

			}
			catch (error) {

				console.log(error);
			}
		};

	const activeCount =
		subscriptions.filter(
			sub =>
				sub.subscriptionStatus ===
				"ACTIVE"
		).length;

	const pausedCount =
		subscriptions.filter(
			sub =>
				sub.subscriptionStatus ===
				"PAUSED"
		).length;

	return (

		<div
			className="subscriptions-page">

			<div
				className="subscriptions-header">

				<h1>

					My Subscriptions

				</h1>

				<p>

					Manage your daily milk and dairy
					product deliveries from one place.

				</p>

			</div>

			<div
				className="subscription-summary">

				<div
					className="summary-card">

					<h2>

						{
							subscriptions.length
						}

					</h2>

					<p>

						Total Plans

					</p>

				</div>

				<div
					className="summary-card">

					<h2>

						{
							activeCount
						}

					</h2>

					<p>

						Active Plans

					</p>

				</div>

				<div
					className="summary-card">

					<h2>

						{
							pausedCount
						}

					</h2>

					<p>

						Paused Plans

					</p>

				</div>

			</div>

			<SubscriptionForm

				products={
					products
				}

				onSubmit={
					handleCreate
				}
			/>

			{
				loading

				?

				<div
					className="empty-subscriptions">

					<h3>

						Loading Subscriptions...

					</h3>

				</div>

				:

				subscriptions.length === 0

				?

				<div
					className="empty-subscriptions">

					<h3>

						No Subscriptions Found

					</h3>

					<p>

						Create your first milk
						delivery plan today.

					</p>

				</div>

				:

				<div
					className="subscriptions-grid">

					{
						subscriptions.map(
							subscription => (

								<SubscriptionCard

									key={
										subscription.subscriptionId
									}

									subscription={
										subscription
									}

									onPause={
										handlePause
									}

									onResume={
										handleResume
									}

									onCancel={
										handleCancel
									}
								/>
							))
					}

				</div>
			}

		</div>
	);
};

export default Subscriptions;