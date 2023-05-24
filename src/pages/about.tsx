import Layout from "../components/composed/Layout/Layout";
import Intro from "../components/sections/about/Intro";
import Companies from "../components/sections/about/Companies";
import TeamAndCulture from "../components/sections/about/TeamAndCulture";

const Aboutpage = () => {
	return (
		<Layout>
			<>
        <Intro />
        <Companies />
        <TeamAndCulture />
			</>
		</Layout>
	);
};

export default Aboutpage;
