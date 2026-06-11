import api from "./api";

const getCart = () => {

	return api.get("/cart");
};

const addToCart = (
	productId,
	quantity
) => {

	return api.post(
		"/cart/add",
		{
			productId,
			quantity
		});
};

const removeFromCart = (
	cartItemId
) => {

	return api.delete(
		`/cart/remove/${cartItemId}`);
};

const clearCart = () => {

	return api.delete(
		"/cart/clear");
};

const cartService = {

	getCart,

	addToCart,

	removeFromCart,

	clearCart
};

export default cartService;