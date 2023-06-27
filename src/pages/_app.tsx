import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/composed/Page";
import Intro from "../components/sections/home/Intro";
import Pricing from "../components/sections/home/Pricing";
import Features from "../components/sections/home/Features";
import Workflows from "../components/sections/home/Workflows";
import Customers from "../components/sections/home/Customers";
import Supercharge from "../components/sections/home/Supercharge";
import Testimonials from "../components/sections/home/Testimonials";
import PricingCard from "../components/composed/PricingCard/PricingCard";
import Perk from "../components/atoms/Perk/Perk";

export default function App({ Component, pageProps }: AppProps) {
	storyblokInit({
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			Perk,
			Intro,
			Pricing,
			Features,
			Customers,
			Workflows,
			page: Page,
			Supercharge,
			PriceCard: PricingCard,
			Testimonial: Testimonials,
		},
	});

	return <Component {...pageProps} />;
}
