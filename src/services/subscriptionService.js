import api from "./api";

const createSubscription = (
	subscriptionData
) => {

	return api.post(
		"/subscriptions",
		subscriptionData);
};

const getMySubscriptions = () => {

	return api.get(
		"/subscriptions/my");
};

const pauseSubscription = (
	subscriptionId
) => {

	return api.put(
		`/subscriptions/pause/${subscriptionId}`);
};

const resumeSubscription = (
	subscriptionId
) => {

	return api.put(
		`/subscriptions/resume/${subscriptionId}`);
};

const cancelSubscription = (
	subscriptionId
) => {

	return api.put(
		`/subscriptions/cancel/${subscriptionId}`);
};

const subscriptionService = {

	createSubscription,

	getMySubscriptions,

	pauseSubscription,

	resumeSubscription,

	cancelSubscription
};

export default subscriptionService;