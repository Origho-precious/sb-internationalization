import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Store from "../store";
import Page from "../components/sections/Page";
import Perk from "../components/atoms/Perk/Perk";
import Intro from "../components/sections/home/Intro";
import Pricing from "../components/sections/home/Pricing";
// import Footer from "../components/composed/Footer/Footer";
import Features from "../components/sections/home/Features";
import Workflows from "../components/sections/home/Workflows";
import Customers from "../components/sections/home/Customers";
import Supercharge from "../components/sections/home/Supercharge";
import Testimonials from "../components/sections/home/Testimonials";
import PricingCard from "../components/composed/PricingCard/PricingCard";
import CoreValues from "../components/sections/about/CoreValues";
import About from "../components/sections/About";
import AboutIntro from "../components/sections/about/AboutIntro";
import Companies from "../components/sections/about/Companies";
import Platform from "../components/sections/about/Platform";
import TeamAndCulture from "../components/sections/about/TeamAndCulture";

export default function App({ Component, pageProps }: AppProps) {
	storyblokInit({
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			Perk,
			Intro,
			// Footer,
			About,
			Pricing,
			Features,
			Customers,
			Companies,
			Workflows,
			AboutIntro,
			page: Page,
			Supercharge,
			CoreValues,
			TeamAndCulture,
			BitMore: Platform,
			PriceCard: PricingCard,
			Testimonial: Testimonials,
		},
	});

	return (
		<Store>
			<Component {...pageProps} />
		</Store>
	);
}
