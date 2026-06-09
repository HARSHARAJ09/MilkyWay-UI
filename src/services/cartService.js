import api from "./api";

const getCartItems = () => {

	return api.get("/cart");
};

const cartService = {

	getCartItems
};

export default cartService;