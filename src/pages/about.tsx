import Layout from "../components/composed/Layout/Layout";
import Intro from "../components/sections/about/Intro";
import Companies from "../components/sections/about/Companies";

const Aboutpage = () => {
	return (
		<Layout>
			<>
        <Intro />
        <Companies />
			</>
		</Layout>
	);
};

export default Aboutpage;
