import styled from "styled-components";
import Layout from "../components/composed/Layout/Layout";
import Intro from "../components/sections/home/Intro";
import Customers from "../components/sections/home/Customers";
import Features from "../components/sections/home/Features";
import Testimonials from "../components/sections/home/Testimonials";
import Pricing from "../components/sections/home/Pricing";
import Workflow from "../components/sections/home/Workflows";

const Homepage = () => {
	return (
		<Layout>
			<Wrapper>
				<Intro />
				<Customers />

				<Features />

				<Testimonials />

				<Pricing />

				<Workflow />
			</Wrapper>
		</Layout>
	);
};

const Wrapper = styled.div``;

export default Homepage;
