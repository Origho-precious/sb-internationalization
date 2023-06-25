import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	ISbStoryParams,
} from "@storyblok/react";
import Layout from "../components/composed/Layout/Layout";

const Homepage = ({ story }: any) => {
	story = useStoryblokState(story);

	return (
		<>
			<Layout>
				<div className="md:mt-20 mt-8">
					<StoryblokComponent blok={story.content} />
				</div>
			</Layout>
		</>
	);
};

export async function getStaticProps() {
	const slug = "home";

	const sbParams: ISbStoryParams = {
		version: "draft", // or 'published'
	};

	const storyblokApi = getStoryblokApi();

	const res = await storyblokApi?.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: res?.data ? res?.data?.story : false,
			key: res?.data ? res?.data?.story.id : false,
		},
		revalidate: 3600,
	};
}

export default Homepage;
