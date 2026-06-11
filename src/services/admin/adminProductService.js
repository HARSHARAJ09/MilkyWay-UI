import api from "../api";

const getAllProducts = () => {

	return api.get(
		"/products");
};

const getProductById = (
	productId
) => {

	return api.get(
		`/products/${productId}`);
};

const createProduct = (
	productData
) => {

	return api.post(
		"/products",
		productData);
};

const updateProduct = (
	productId,
	productData
) => {

	return api.put(
		`/products/${productId}`,
		productData);
};

const deleteProduct = (
	productId
) => {

	return api.delete(
		`/products/${productId}`);
};

const searchProducts = (
	keyword
) => {

	return api.get(
		`/products/search?keyword=${keyword}`);
};

const getProductsByCategory = (
	categoryId
) => {

	return api.get(
		`/products/category/${categoryId}`);
};

const adminProductService = {

	getAllProducts,

	getProductById,

	createProduct,

	updateProduct,

	deleteProduct,

	searchProducts,

	getProductsByCategory
};

export default adminProductService;