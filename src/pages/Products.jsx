import React, {
	useEffect,
	useState
} from "react";

import productService
	from "../services/productService";

const Products = () => {

	const [products,
		setProducts] =
		useState([]);

	useEffect(() => {

		loadProducts();

	}, []);

	const loadProducts =
		async () => {

		try {

			const response =
				await productService
					.getAllProducts();

			setProducts(
				response.data);

		} catch (error) {

			console.log(error);
		}
	};

	return (

		<div>

			<h1>
				Products
			</h1>

			{
				products.map(
					product => (

						<div
							key={
								product.id
							}>

							<h3>
								{
									product.productName
								}
							</h3>

							<p>
								₹
								{
									product.price
								}
							</p>

						</div>
					))
			}

		</div>
	);
};

export default Products;