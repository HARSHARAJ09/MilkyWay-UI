import api from "./api";

const getMyOrders = () => {

	return api.get(
		"/orders/my-orders");
};

const orderService = {

	getMyOrders
};

export default orderService;