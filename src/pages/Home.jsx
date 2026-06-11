import React,
{
	useEffect,
	useState
}
from "react";

import Navbar
	from "../components/Navbar";

import Footer
	from "../components/Footer";

import HeroSection
	from "../components/HeroSection";

import ProductCard
	from "../components/ProductCard";

import CategoryCard
	from "../components/CategoryCard";

import productService
	from "../services/productService";

import categoryService
	from "../services/categoryService";

import "../assets/css/Home.css";
import FeaturedCategories from "../components/FeaturedCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import SubscriptionBanner from "../components/SubscriptionBanner";
import OfferBanner from "../components/OfferBanner";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {

	const [products,
		setProducts] =
		useState([]);

	const [categories,
		setCategories] =
		useState([]);

	useEffect(() => {

		loadData();

	}, []);

	const loadData =
		async () => {

		const productsResponse =
			await productService
				.getAllProducts();

		const categoriesResponse =
			await categoryService
				.getAllCategories();

		setProducts(
			productsResponse.data);

		setCategories(
			categoriesResponse.data);
	};

	return (

		<>

			<Navbar />

			<HeroSection />

			<WhyChooseUs />

			<FeaturedCategories />

			<ProductCarousel products={products} />

			<section className="section">

				<h2>

					Categories

				</h2>

				<div className="category-grid">

					{
						categories.map(
							category => (

								<CategoryCard
									key={
										category.id
									}
									category={
										category
									}
								/>
							))
					}

				</div>

			</section>

	<section className="section">

	<h2>

		Featured Products

	</h2>

	<div className="product-grid">

		{
			products.slice(0, 6)
				.map(product => (

					<ProductCard
						key={product.id}
						product={product}
					/>
				))
		}

	</div>

</section>

<OfferBanner />

<Testimonials />

<SubscriptionBanner />

<Footer />

		</>
	);
};

export default Home;