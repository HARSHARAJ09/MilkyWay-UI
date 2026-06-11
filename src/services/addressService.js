import api from "./api";

const getAddresses = () => {

	return api.get(
		"/addresses");
};

const addAddress = (
	addressData
) => {

	return api.post(
		"/addresses",
		addressData);
};

const updateAddress = (
	addressId,
	addressData
) => {

	return api.put(
		`/addresses/${addressId}`,
		addressData);
};

const deleteAddress = (
	addressId
) => {

	return api.delete(
		`/addresses/${addressId}`);
};

const addressService = {

	getAddresses,

	addAddress,

	updateAddress,

	deleteAddress
};

export default addressService;