import api from "./api";

const login = (loginData) => {

	return api.post(
		"/auth/login",
		loginData);
};

const register = (registerData) => {

	return api.post(
		"/auth/register",
		registerData);
};

const authService = {

	login,

	register
};

export default authService;