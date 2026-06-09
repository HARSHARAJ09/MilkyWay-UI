import React, {
	useEffect,
	useState
} from "react";

import productService
	from "../services/productService";

import ProductCard
	from "../components/ProductCard";

import SearchBar
	from "../components/SearchBar";

import SidebarFilter
	from "../components/SidebarFilter";

import categoryService
	from "../services/categoryService";

import "../assets/css/Products.css";

const Products = () => {

const [products,
	setProducts] =
	useState([]);

const [categories,
	setCategories] =
	useState([]);

const [search,
	setSearch] =
	useState("");

const [selectedCategory,
	setSelectedCategory] =
	useState("");


	useEffect(() => {

		loadProducts();

	}, []);

	const filteredProducts =
	products.filter(product => {

		const matchSearch =

			product.productName
				.toLowerCase()
				.includes(
					search.toLowerCase());

		const matchCategory =

			selectedCategory === ""

			||

			product.categoryName ===
				selectedCategory;

		return matchSearch &&
				matchCategory;
	});

	const loadProducts =
		async () => {

		try {

		const productResponse =
			await productService
				.getAllProducts();

		const categoryResponse =
			await categoryService
				.getAllCategories();

		setProducts(
			productResponse.data);

		setCategories(
			categoryResponse.data);

	} catch (error) {

		console.log(error);
	}
	};

	return (

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

	</div>

</div>
	);
};

export default Products;