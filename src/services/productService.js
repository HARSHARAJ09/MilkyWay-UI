import api from "./api";

const getAllProducts = () => {

	return api.get(
		"/products");
};

const getProductById = (
	productId) => {

	return api.get(
		`/products/${productId}`);
};

const productService = {

	getAllProducts,

	getProductById
};

export default productService;