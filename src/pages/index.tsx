import { Fragment } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Layout from "../components/composed/Layout/Layout";

const customers = [
	{
		height: 35,
		width: 84,
		src: "/images/icons/stripe.webp",
	},
	{
		height: 35,
		width: 163,
		src: "/images/icons/microsoft.webp",
	},
	{
		height: 35,
		width: 110,
		src: "/images/icons/airbnb.webp",
	},
	{
		height: 35,
		width: 107,
		src: "/images/icons/google.webp",
	},
	{
		height: 35,
		width: 164,
		src: "/images/icons/storyblok.webp",
	},
];

const features = [
	{
		iconUrl: "/images/icons/idea.svg",
		title: "Idea Management",
		description:
			"Capture and organize your ideas in one place, and collaborate with your team to refine them into actionable plans.",
	},
	{
		iconUrl: "/images/icons/roadmap.svg",
		title: "Roadmap Planning",
		description:
			"Visualize your product development timeline and prioritize tasks to ensure you stay on track.",
	},
	{
		iconUrl: "/images/icons/project.svg",
		title: "Project Management",
		description:
			"Assign tasks, set deadlines, and track progress in real-time to keep everyone on the same page.",
	},
	{
		iconUrl: "/images/icons/feedback.svg",
		title: "Feedback Collection",
		description:
			"Gather feedback from stakeholders and customers to ensure your product meets their needs.",
	},
];

const testimonials = [
	{
		rating: 5,
		reviewerName: "Gigi Wrights",
		companyLogo: "/images/icons/airbnb.webp",
		reviewerImage: "/images/testimonial.webp",
		testimony:
			"We used to struggle with keeping track of our development process and collaborating effectively, but with this tool, everything is in one place. We've been able to streamline our workflow, track progress in real-time, and get valuable feedback from our stakeholders.",
	},
];

const Homepage = () => {
	return (
		<Layout>
			<Wrapper>
				<section className="sb-intro">
					<div className="relative mx-auto sm:w-full w-max">
						<h1 className="font-inter md:text-[64px] text-[40px] text-center text-secondary font-black">
							Move from start to done
						</h1>

						<img
							alt="underline"
							src="/images/icons/underline.webp"
							className="absolute sb-underline-img"
						/>
					</div>

					<p className="text-center md:text-[24px] sm:text-[20px] sb-para-1">
						Our platform is designed to help you streamline your product
						development process, from ideation to launch. With our easy-to-use
						interface and powerful features, you'll be able to bring your ideas
						to life in no time.
					</p>

					<div className="sb-video-section flex items-center justify-center">
						<div className="flex items-center">
							<p className="text-[15px] text-[#828282] mr-3 font-medium">
								Watch Demo
							</p>
							<img
								alt="play-demo"
								src="/images/icons/play.webp"
								style={{ width: "35px", height: "35px" }}
							/>
						</div>
						<button className="sb-seat-btn flex items-center justify-center">
							<img
								alt="seat"
								src="/images/icons/seat.svg"
								style={{ width: "14px", height: "13px", marginRight: "5px" }}
							/>
							<p className="text-[15px] text-white font-medium">Save a seat</p>
						</button>
					</div>
				</section>

				<section className="sb-customers w-full mx-auto">
					<h2 className="text-center" style={{ marginBottom: 40 }}>
						Trusted by top companies
					</h2>

					<div className="sb-customers-logos flex items-center justify-center">
						<Marquee
							speed={100}
							gradient={false}
							direction="left"
							pauseOnHover={true}
							className="flex items-center"
						>
							{customers.map((customer) => (
								<img {...customer} alt="customer" key={customer.src} />
							))}
						</Marquee>
					</div>
				</section>

				<section className="sb-features mx-auto">
					<header className="mx-auto">
						<h1 className="text-center text-secondary font-inter">
							Features <span className="text-primary">uniquely</span> tailored
							for you
						</h1>
						<p className="text-center">
							Our tool is designed to be flexible and customizable to fit your
							unique needs. Whether you're a startup looking to launch your
							first product or a large enterprise managing a portfolio of
							products, our platform can help you stay organized and focused on
							your goals.
						</p>
					</header>

					<div className="flex flex-col items-center justify-center">
						<div className="grid lg:grid-cols-2 grid-cols-1 gap-[74px] w-full">
							{features.map((feature) => (
								<FeatureCard key={feature.title}>
									<img src={feature.iconUrl} alt="feature-icon" />
									<h3 className="font-inter text-secondary">{feature.title}</h3>
									<p>{feature.description}</p>
								</FeatureCard>
							))}
						</div>
					</div>
				</section>

				<section className="sb-testimonial flex lg:flex-row flex-col justify-between">
					{testimonials.map(
						({
							reviewerName,
							rating,
							companyLogo,
							testimony,
							reviewerImage,
						}) => (
							<Fragment key={reviewerName}>
								<header>
									<div className="flex items-center lg:justify-start justify-center">
										<hr />
										<h3 className="font-nunito text-primary">TESTIMONIAL</h3>
									</div>

									<h2 className="font-inter text-secondary lg:text-left text-center">
										What They Say?
									</h2>
									<p className="lg:text-left text-center w-11/12 mx-auto">
										With over 20k positive reviews, we are proud to believe we
										are getting a lot done correctly.
									</p>
								</header>

								<div className="sb-testimonial-img relative lg:block  items-end">
									<img src={reviewerImage} alt="testimonial" />

									<div className="sb-testimony lg:absolute lg:right-[45%] lg:top-[65%]">
										<p className="font-nunito">{testimony}</p>

										<div className="flex items-center justify-between flex-wrap">
											<div>
												<h6 className="font-inter">{reviewerName}</h6>
												<img
													alt="Company"
													src={companyLogo}
													style={{ width: 53, height: 17, opacity: 0.8 }}
												/>
											</div>

											<div className="sb-rating flex items-center">
												{Array.from({ length: rating }).map((_, i) => (
													<img
														key={i}
														alt="rating"
														src="/images/icons/star.svg"
														style={{ width: 20, height: 19 }}
													/>
												))}
											</div>
										</div>
									</div>
								</div>
							</Fragment>
						)
					)}
				</section>
			</Wrapper>
		</Layout>
	);
};

const Wrapper = styled.div`
	& .sb-intro {
		max-width: 824px;
		margin: 79px auto 104px;

		@media screen and (max-width: 639px) {
			margin-top: 40px;
		}

		& > div {
			@media screen and (max-width: 539px) {
				width: 100%;
			}
		}

		& h1 {
			@media screen and (max-width: 992px) {
				line-height: 1.1;
			}

			@media screen and (max-width: 529px) {
				font-size: 32px;
			}
		}

		& .sb-para-1 {
			margin-top: 25px;
			line-height: 168.52%;

			@media screen and (max-width: 529px) {
				margin-top: 16px;
			}
		}

		& .sb-underline-img {
			top: 75%;
			right: 18px;
			width: 172px;

			@media screen and (max-width: 992px) {
				top: 95%;
				right: 50%;
				transform: translateX(50%);
			}

			@media screen and (max-width: 767px) {
				top: 95%;
				right: 40px;
				width: 100px;
				transform: unset;
			}

			@media screen and (max-width: 639px) {
				right: 0;
				width: 100px;
			}

			@media screen and (max-width: 529px) {
				display: none;
			}
		}

		& .sb-video-section {
			margin-top: 73px;

			@media screen and (max-width: 767px) {
				margin-top: 40px;
			}

			@media screen and (max-width: 440px) {
				flex-direction: column;
			}

			& .sb-seat-btn {
				width: 185px;
				height: 44px;
				margin-left: 25px;
				border-radius: 5px;
				background: var(--color-primary);
				box-shadow: 7px 7px 0px #1b243f;
				transition: all 0.3s ease-in-out;

				@media screen and (max-width: 440px) {
					margin-top: 12px;
					margin-left: 0;
					width: 90%;
				}

				&:hover {
					box-shadow: 8px 8px 0px #1b243f;
				}
			}
		}
	}

	& .sb-customers {
		left: 0;
		right: 0;
		position: absolute;
		height: 225px;
		padding: 61px 0 60px;
		background: rgba(0, 179, 176, 0.12);

		& h2 {
			color: #828282;
			font-size: 24px;
			font-weight: 600;
			line-height: 29px;
		}

		& .sb-customers-logos {
			& img {
				margin-right: 100px !important;

				@media screen and (max-width: 767px) {
					margin-right: 50px !important;
				}
			}
		}
	}

	& .sb-features {
		margin-top: 430px;

		& > header {
			max-width: 734px;

			@media screen and (max-width: 539px) {
				width: 100%;
			}

			& h1 {
				font-weight: 800;
				font-size: 64px;
				line-height: 77px;
				margin-bottom: 26px;

				@media screen and (max-width: 639px) {
					font-size: 48px;
					line-height: 60px;
				}

				@media screen and (max-width: 500px) {
					font-size: 36px;
					line-height: 50px;
					margin-bottom: 16px;
				}
			}

			& > p {
				font-weight: 400;
				font-size: 20px;
				line-height: 168.5%;
				margin-bottom: 86px;

				@media screen and (max-width: 639px) {
					margin-top: 16px;
				}
			}
		}
	}

	& .sb-testimonial {
		margin: 174px 0 266px;

		& header {
			max-width: 475px;

			@media screen and (max-width: 1023px) {
				max-width: 100%;
			}

			& > div {
				margin-bottom: 32px;

				& > hr {
					width: 80px;
					height: 3px;
					margin-right: 30px;
					background: var(--color-primary);
				}

				& > h3 {
					font-weight: 400;
					font-size: 20px;
					line-height: 27px;
					letter-spacing: 0.2rem;
				}
			}

			& > h2 {
				font-size: 60px;
				font-weight: 700;
				line-height: 72px;
				margin-bottom: 38px;

				@media screen and (max-width: 639px) {
					font-size: 36px;
					line-height: 56px;
					margin-bottom: 24px;
				}
			}

			& > p {
				color: #696984;
				font-size: 26px;
				font-weight: 400;
				line-height: 160%;
				letter-spacing: 0.02em;

				@media screen and (max-width: 639px) {
					font-size: 24px;
				}
			}
		}

		& .sb-testimonial-img {
			@media screen and (max-width: 1023px) {
				max-width: 100%;
				margin-top: 32px;
				margin-left: auto;
				margin-right: auto;
			}

			& > img {
				margin: auto;
				display: block;
				max-width: 448px;
				max-height: 560px;

				@media screen and (max-width: 1023px) {
					max-height: 560px !important;
					max-width: 100% !important;
				}

				@media screen and (max-width: 639px) {
					display: none;
				}
			}

			& .sb-testimony {
				width: 569px;
				background: #fff;
				height: max-content;
				padding: 15px 31px 28px;
				border-radius: 10px 20px 20px 10px;
				border-left: 11px solid var(--color-primary);
				box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1);

				@media screen and (max-width: 1023px) {
					width: 100%;
					margin-top: 24px;
				}

				@media screen and (max-width: 639px) {
					padding: 12px 16px 16px;
				}

				& > p {
					color: #5f5f7e;
					font-size: 16px;
					font-weight: 400;
					max-width: 446px;
					line-height: 180%;
					letter-spacing: 0.02em;
				}

				& > div {
					margin-top: 25px;

					& h6 {
						color: #5f5f7e;
						font-size: 16px;
						font-weight: 600;
						line-height: 180%;
						margin-bottom: 3px;
					}

					& .sb-rating {
						margin: 10px 0;

						& > img {
							margin-right: 4px;

							&:last-child {
								margin-right: 0;
							}
						}
					}
				}
			}
		}
	}
`;

const FeatureCard = styled.div`
	background: #fff;
	max-width: 551px;
	height: max-content;
	border-radius: 16px;
	padding: 59px 57px 72px;
	border: 2px solid var(--color-primary);
	box-shadow: 9px 9px 0px var(--color-primary);

	@media screen and (max-width: 1023px) {
		padding: 40px 30px 50px;
		margin: 0 auto;
	}

	@media screen and (max-width: 639px) {
		padding: 24px 24px;
		margin: 0 auto;
	}

	&:nth-child(even) {
		margin-top: 24px;

		@media screen and (max-width: 1023px) {
			margin-top: 0;
		}
	}

	& > img {
		width: 64px;
		height: 64px;
	}

	& > h3 {
		font-size: 20px;
		font-weight: 700;
		margin: 9px 0 12px;
		line-height: 168.5%;
	}

	& > p {
		font-size: 20px;
		line-height: 168.5%;
	}
`;

export default Homepage;
