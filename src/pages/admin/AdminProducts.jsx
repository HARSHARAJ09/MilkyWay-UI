import React,
{
	useEffect,
	useState
}
from "react";

import adminProductService
	from "../../services/admin/adminProductService";

import "../../assets/css/admin/AdminProducts.css";

const AdminProducts = () => {

	const [products,
		setProducts] =
		useState([]);

	const [search,
		setSearch] =
		useState("");

	const loadProducts =
		async () => {

			try {

				const response =
					await adminProductService
						.getAllProducts();

				setProducts(
					response.data);

			} catch (error) {

				console.log(error);
			}
		};

	useEffect(() => {

		loadProducts();

	}, []);

	const handleDelete =
		async (productId) => {

			const confirmDelete =
				window.confirm(
					"Delete Product ?");

			if (
				!confirmDelete
			) {

				return;
			}

			try {

				await adminProductService
					.deleteProduct(
						productId);

				loadProducts();

			} catch (error) {

				console.log(error);
			}
		};

	const handleSearch =
		async () => {

			if (
				search.trim() === ""
			) {

				loadProducts();

				return;
			}

			try {

				const response =
					await adminProductService
						.searchProducts(
							search);

				setProducts(
					response.data);

			} catch (error) {

				console.log(error);
			}
		};

	return (

		<div
			className="admin-products">

			<h1>

				Product Management

			</h1>

			<div
				className="admin-search">

				<input
					type="text"
					placeholder="Search Product"
					value={search}
					onChange={
						(event) =>
							setSearch(
								event.target.value)
					}
				/>

				<button
					onClick={
						handleSearch
					}>

					Search

				</button>

			</div>

			<table>

				<thead>

					<tr>

						<th>ID</th>

						<th>Name</th>

						<th>Category</th>

						<th>Price</th>

						<th>Quantity</th>

						<th>Actions</th>

					</tr>

				</thead>

				<tbody>

					{
						products.map(
							product => (

								<tr
									key={
										product.id
									}>

									<td>

										{
											product.id
										}

									</td>

									<td>

										{
											product.productName
										}

									</td>

									<td>

										{
											product.categoryName
										}

									</td>

									<td>

										₹
										{
											product.price
										}

									</td>

									<td>

										{
											product.quantity
										}

									</td>

									<td>

										<button>

											Edit

										</button>

										<button

											onClick={() =>
												handleDelete(
													product.id)
											}>

											Delete

										</button>

									</td>

								</tr>
							))
					}

				</tbody>

			</table>

		</div>
	);
};

export default AdminProducts;