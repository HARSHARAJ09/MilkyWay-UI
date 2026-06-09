import api from "./api";

const getAllCategories = () => {

	return api.get(
		"/categories");
};

const getCategoryById = (
	categoryId) => {

	return api.get(
		`/categories/${categoryId}`);
};

const categoryService = {

	getAllCategories,

	getCategoryById
};

export default categoryService;