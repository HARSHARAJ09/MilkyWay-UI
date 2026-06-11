import api from "./api";

/* =========================
   CUSTOMER PROFILE
========================= */

const getProfile = () => {

	return api.get(
		"/users/profile"
	);
};

const updateProfile = (userData) => {

	return api.put(
		"/users/profile",
		userData
	);
};

/* =========================
   ADMIN USERS
========================= */

const getAllUsers = () => {

	return api.get(
		"/users"
	);
};

const getUserById = (userId) => {

	return api.get(
		`/users/${userId}`
	);
};

const deleteUser = (userId) => {

	return api.delete(
		`/users/${userId}`
	);
};

/* =========================
   EXPORTS
========================= */

const userService = {

	getProfile,

	updateProfile,

	getAllUsers,

	getUserById,

	deleteUser
};

export default userService;