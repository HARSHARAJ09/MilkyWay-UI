import api from "./api";

const placeOrder = (
	remarks
) => {

	return api.post(
		"/orders/place",
		{
			remarks
		});
};

const getMyOrders = () => {

	return api.get(
		"/orders/my-orders");
};

const getOrderById = (
	orderId
) => {

	return api.get(
		`/orders/${orderId}`);
};

const orderService = {

	placeOrder,

	getMyOrders,

	getOrderById
};

export default orderService;