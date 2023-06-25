import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Customers from "../components/sections/home/Customers";
import Features from "../components/sections/home/Features";
import Intro from "../components/sections/home/Intro";
import Page from "../components/composed/Page";
import Supercharge from "../components/sections/home/Supercharge";
import Testimonials from "../components/sections/home/Testimonials";
import Workflows from "../components/sections/home/Workflows";

export default function App({ Component, pageProps }: AppProps) {
	storyblokInit({
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			Customers,
			Features,
			Intro,
			page: Page,
			Supercharge,
			Testimonial: Testimonials,
			Workflows,
		},
	});

	return <Component {...pageProps} />;
}
