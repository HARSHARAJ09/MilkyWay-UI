// import React,
// {
// 	useEffect,
// 	useState
// }
// from "react";

// import Navbar
// 	from "../components/Navbar";

// import Footer
// 	from "../components/Footer";

// import HeroSection
// 	from "../components/HeroSection";

// import Statistics
// 	from "../components/Statistics";

// import WhyChooseUs
// 	from "../components/WhyChooseUs";

// import FeaturedCategories
// 	from "../components/FeaturedCategories";

// import ProductCarousel
// 	from "../components/ProductCarousel";

// import ProductCard
// 	from "../components/ProductCard";

// import Testimonials
// 	from "../components/Testimonials";

// import SubscriptionBanner
// 	from "../components/SubscriptionBanner";

// import OfferBanner
// 	from "../components/OfferBanner";

// import Loader
// 	from "../components/Loader";

// import productService
// 	from "../services/productService";

// import "../assets/css/Home.css";

// const Home = () => {

// 	const [products,
// 		setProducts] =
// 		useState([]);

// 	const [loading,
// 		setLoading] =
// 		useState(true);

// 	const loadData =
// 		async () => {

// 			try {

// 				const response =
// 					await productService
// 						.getAllProducts();

// 				setProducts(
// 					response.data
// 				);

// 			} catch (error) {

// 				console.log(error);

// 			} finally {

// 				setLoading(false);
// 			}
// 		};

// 	useEffect(() => {

// 		loadData();

// 	}, []);

// 	if (loading) {

// 		return (

// 			<>
// 				<Navbar />

// 				<Loader />

// 				<Footer />
// 			</>
// 		);
// 	}

// 	return (

// 		<div
// 			className="home-page">

// 			<Navbar />

// 			<HeroSection />

// 			<Statistics />

// 			<WhyChooseUs />

// 			<FeaturedCategories />

// 			{
// 				products.length > 0 &&

// 				<ProductCarousel
// 					products={
// 						products.slice(
// 							0,
// 							10
// 						)
// 					}
// 				/>
// 			}

// 			<section
// 				className="featured-products">

// 				<div
// 					className="section-header">

// 					<span
// 						className="section-badge">

// 						Best Sellers

// 					</span>

// 					<h2>

// 						Featured Products

// 					</h2>

// 					<p>

// 						Fresh dairy products loved
// 						by thousands of families.

// 					</p>

// 				</div>

// 				<div
// 					className="product-grid">

// 					{
// 						products
// 							.slice(0, 6)
// 							.map(
// 								product => (

// 									<ProductCard

// 										key={
// 											product.id
// 										}

// 										product={
// 											product
// 										}
// 									/>
// 								))
// 					}

// 				</div>

// 			</section>

// 			<OfferBanner />

// 			<Testimonials />

// 			<SubscriptionBanner />

// 			<Footer />

// 		</div>
// 	);
// };

// export default Home;

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

import Statistics
	from "../components/Statistics";

import WhyChooseUs
	from "../components/WhyChooseUs";

import FeaturedCategories
	from "../components/FeaturedCategories";

import ProductCarousel
	from "../components/ProductCarousel";

import ProductCard
	from "../components/ProductCard";

import CategoryCard
	from "../components/CategoryCard";

import Testimonials
	from "../components/Testimonials";

import SubscriptionBanner
	from "../components/SubscriptionBanner";

import OfferBanner
	from "../components/OfferBanner";

import Loader
	from "../components/Loader";

import productService
	from "../services/productService";

import categoryService
	from "../services/categoryService";

import "../assets/css/Home.css";

const Home = () => {

	const [products,
		setProducts] =
		useState([]);

	const [categories,
		setCategories] =
		useState([]);

	const [loading,
		setLoading] =
		useState(true);

	const loadData =
		async () => {

			try {

				const [
					productResponse,
					categoryResponse
				] = await Promise.all([

					productService
						.getAllProducts(),

					categoryService
						.getAllCategories()
				]);

				setProducts(
					productResponse.data
				);

				setCategories(
					categoryResponse.data
				);

			} catch (error) {

				console.log(error);

			} finally {

				setLoading(false);
			}
		};

	useEffect(() => {

		loadData();

	}, []);

	if (loading) {

		return (

			<>
				<Navbar />
				<Loader />
				<Footer />
			</>
		);
	}

	return (

		<div
			className="home-page">

			<Navbar />

			<HeroSection />

			<Statistics />

			<WhyChooseUs />

			<FeaturedCategories />

			{
				products.length > 0 &&

				<ProductCarousel
					products={
						products.slice(
							0,
							10
						)
					}
				/>
			}

			<section
				className="categories-showcase">

				<div
					className="section-header">

					<span
						className="section-badge">

						Dairy Collection

					</span>

					<h2>

						Shop By Category

					</h2>

					<p>

						Explore all categories
						and discover fresh
						dairy products sourced
						directly from farms.

					</p>

				</div>

				<div
					className="category-grid">

					{
						categories.length > 0

						?

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

						:

						<div
							className="empty-state">

							No Categories Available

						</div>
					}

				</div>

			</section>

			<section
				className="featured-products">

				<div
					className="section-header">

					<span
						className="section-badge">

						Best Sellers

					</span>

					<h2>

						Featured Products

					</h2>

					<p>

						Our most loved dairy
						products chosen by
						thousands of customers.

					</p>

				</div>

				<div
					className="product-grid">

					{
						products
							.slice(0, 6)
							.map(
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

			</section>

			<OfferBanner />

			<Testimonials />

			<SubscriptionBanner />

			<Footer />

		</div>
	);
};

export default Home;