import React, {
	useEffect,
	useState
} from "react";

import productService
	from "../services/productService";

import categoryService
	from "../services/categoryService";

import ProductCard
	from "../components/ProductCard";

import SearchBar
	from "../components/SearchBar";

import SidebarFilter
	from "../components/SidebarFilter";

import "../assets/css/Products.css";

const Products = () => {

	const [products,
		setProducts] =
		useState([]);
	
	// const [loading,
	// setLoading] =
	// useState(true);

	const [categories,
		setCategories] =
		useState([]);

	const [search,
		setSearch] =
		useState("");

	const [selectedCategory,
		setSelectedCategory] =
		useState("");

	const [loading,
		setLoading] =
		useState(true);

	const [error,
		setError] =
		useState("");

	useEffect(() => {

		loadProducts();

	}, []);

	const loadProducts =
		async () => {

			try {

				setLoading(true);

				const productResponse =
					await productService
						.getAllProducts();

				const categoryResponse =
					await categoryService
						.getAllCategories();

				setProducts(
					productResponse.data || []
				);

				setCategories(
					categoryResponse.data || []
				);

			} catch (error) {

				console.error(error);

				setError(
					"Unable to load products."
				);

			} finally {

				setLoading(false);
			}
		};

	const filteredProducts =
		products.filter(product => {

			const matchSearch =

				product.productName
					?.toLowerCase()
					.includes(
						search.toLowerCase()
					);

			const matchCategory =

				selectedCategory === ""

				||

				product.categoryName ===
				selectedCategory;

			return (
				matchSearch &&
				matchCategory
			);
		});

	return (

		<div className="products-page">

			<div className="products-header">

				<h1>

					Our Products

				</h1>

				<p>

					Fresh dairy products delivered directly from farm to home.

				</p>

			</div>

			<div className="products-layout">

				<SidebarFilter

					categories={
						categories
					}

					selectedCategory={
						selectedCategory
					}

					setSelectedCategory={
						setSelectedCategory
					}
				/>

				<div className="products-content">

					<SearchBar

						search={
							search
						}

						setSearch={
							setSearch
						}
					/>

					<div className="products-info">

						<span>

							Showing

							{" "}

							{
								filteredProducts.length
							}

							{" "}

							Products

						</span>

					</div>

					{
						loading &&

						<div className="loading-state">

							Loading Products...

						</div>
					}

					{
						error &&

						<div className="error-state">

							{error}

						</div>
					}

					{
						!loading &&
						!error &&
						filteredProducts.length === 0 &&

						<div className="empty-state">

							<h3>

								No Products Found

							</h3>

							<p>

								Try changing your search or category filter.

							</p>

						</div>
					}

					{
						!loading &&
						!error &&
						filteredProducts.length > 0 &&

						<div className="product-grid">

							{
								filteredProducts.map(
									product => (

										<ProductCard

											key={
												product.id
											}

											product={
												product
											}
										/>
									))
							}

						</div>
					}

				</div>

			</div>

		</div>
	);
};

export default Products;