import styled from "styled-components";

const Supercharge = () => {
	return (
		<Section className="flex flex-col items-center justify-center">
			<div>
				<h2 className="text-center text-white font-inter">
					Supercharge your team’s workflow today
				</h2>
				<p className="text-center text-white">
					Make magic happen with a one of your new favorite all-in-one product
					development platform
				</p>
			</div>
		</Section>
	);
};

const Section = styled.section`
	z-index: 1;
	width: 100%;
	position: relative;
	background: #00b3b0;
	border-radius: 30px;
	padding: 68px 24px 67px;
	bottom: -97px;

	@media screen and (max-width: 767px) {
		bottom: -40px;
    border-radius: 16px;
	}

	& h2 {
		font-size: 48px;
		max-width: 788px;
		font-weight: 700;
		line-height: 58px;
		margin: 0 auto 23px;

		@media screen and (max-width: 767px) {
			font-size: 32px;
			line-height: 42px;
		}
	}

	& p {
		font-weight: 400;
		font-size: 20px;
		max-width: 788px;
		line-height: 26px;
		margin: 0 auto;

		@media screen and (max-width: 767px) {
			font-size: 18px;
			line-height: 26px;
		}
	}
`;

export default Supercharge;
