import { useContext, useEffect, useState } from "react";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { AppContext } from "../store";
import { fetchStoryByLanguage } from "../utils";
import Layout from "../components/composed/Layout/Layout";
import Spinner from "../components/atoms/Spinner/Spinner";

const Homepage = ({ initialStory }: any) => {
	const { language } = useContext(AppContext);
	const [story, setStory] = useState(useStoryblokState(initialStory));

	useEffect(() => {
		const fetchStory = async () => {
			const story = await fetchStoryByLanguage("home", language);
			console.log(story);
			setStory(story);
		};

		fetchStory();
	}, [language]);

	return (
		<>
			<Layout>
				<div className="md:mt-20 mt-8">
					{!story ? (
						<div className="flex flex-col items-center">
							<Spinner size={100} />
						</div>
					) : (
						<StoryblokComponent blok={story?.content} />
					)}
				</div>
			</Layout>
		</>
	);
};

export async function getStaticProps() {
	const language = "en-us";

	const res = await await fetchStoryByLanguage("home", language);

	return {
		props: {
			initialStory: res?.data ? res?.data?.story : false,
			key: res?.data ? res?.data?.story.id : false,
		},
		revalidate: 3600,
	};
}

export default Homepage;
