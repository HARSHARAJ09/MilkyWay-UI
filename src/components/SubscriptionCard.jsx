import React from "react";

const SubscriptionCard = ({

	subscription,

	onPause,

	onResume,

	onCancel

}) => {

	return (

		<div
			className="subscription-card">

			<div
				className="subscription-top">

				<h3>

					{
						subscription.productName
					}

				</h3>

				<span
					className={
						`status ${subscription.status}`
					}>

					{
						subscription.status
					}

				</span>

			</div>

			<div
				className="subscription-details">

				<p>

					<strong>
						Subscription ID :
					</strong>

					#
					{
						subscription.subscriptionId
					}

				</p>

				<p>

					<strong>
						Quantity :
					</strong>

					{
						subscription.quantity
					}

				</p>

				<p>

					<strong>
						Frequency :
					</strong>

					{
						subscription.frequency
					}

				</p>

				<p>

					<strong>
						Start Date :
					</strong>

					{
						subscription.startDate
					}

				</p>

				<p>

					<strong>
						End Date :
					</strong>

					{
						subscription.endDate
					}

				</p>

			</div>

			<div
				className="subscription-actions">

				{
					subscription.status ===
					"ACTIVE" && (

						<button

							className="pause-btn"

							onClick={() =>
								onPause(
									subscription.subscriptionId
								)
							}>

							Pause

						</button>
					)
				}

				{
					subscription.status ===
					"PAUSED" && (

						<button

							className="resume-btn"

							onClick={() =>
								onResume(
									subscription.subscriptionId
								)
							}>

							Resume

						</button>
					)
				}

				{
					subscription.status !==
					"CANCELLED" && (

						<button

							className="cancel-btn"

							onClick={() =>
								onCancel(
									subscription.subscriptionId
								)
							}>

							Cancel

						</button>
					)
				}

			</div>

		</div>
	);
};

export default SubscriptionCard;