import orderService
	from "./orderService";

import addressService
	from "./addressService";

const getDashboardData =
	async () => {

		const orders =
			await orderService
				.getMyOrders();

		const addresses =
			await addressService
				.getAddresses();

		return {

			orders:
				orders.data,

			addresses:
				addresses.data
		};
	};

const dashboardService = {

	getDashboardData
};

export default dashboardService;