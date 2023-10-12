import { useContext, useEffect, useState } from "react";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { AppContext } from "../store";
import { fetchStoryByLanguage } from "../utils";
import Layout from "../components/composed/Layout/Layout";
import Spinner from "../components/atoms/Spinner/Spinner";

const Templatespage = ({ initialStory }: any) => {
	const { language } = useContext(AppContext);
	const [story, setStory] = useState(initialStory);

	useEffect(() => {
		const fetchStory = async () => {
			const story = await fetchStoryByLanguage("templates", language);
			setStory(story);
		};

		fetchStory();
	}, [language]);

	// const sbStory = useStoryblokState(story);
	const sbStory = story;

	return (
		<>
			<Layout>
				<div className="md:mt-20 mt-8">
					{!sbStory || !(sbStory as any)?.content ? (
						<div className="flex flex-col items-center">
							<Spinner size={100} />
						</div>
					) : (
						<StoryblokComponent blok={sbStory.content} />
					)}
				</div>
			</Layout>
		</>
	);
};

export async function getStaticProps() {
	const language = "en-us";

	const res = await fetchStoryByLanguage("templates", language);

	return {
		props: {
			initialStory: res?.data ? res?.data?.story : false,
			key: res?.data ? res?.data?.story.id : false,
		},
		revalidate: 3600,
	};
}

export default Templatespage;
