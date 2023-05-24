import Layout from "../components/composed/Layout/Layout";
import Intro from "../components/sections/about/Intro";
import Companies from "../components/sections/about/Companies";
import TeamAndCulture from "../components/sections/about/TeamAndCulture";
import Supercharge from "../components/sections/home/Supercharge";

const Aboutpage = () => {
	return (
		<Layout>
			<>
        <Intro />
        <Companies />
        <TeamAndCulture />
        <Supercharge />
			</>
		</Layout>
	);
};

export default Aboutpage;
