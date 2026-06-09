import React from "react";

import {
	useNavigate
}
from "react-router-dom";

import "../assets/css/HeroSection.css";

const HeroSection = () => {

	const navigate =
		useNavigate();

	return (

<section className="hero">

	<div className="hero-content">

		<h1>

			Fresh Dairy
			At Your Doorstep

		</h1>

		<p>

			Pure Milk, Paneer,
			Curd, Butter,
			Cheese & Ghee

		</p>

		<button>

			Shop Fresh Now

		</button>

	</div>

</section>
	);
};

export default HeroSection;