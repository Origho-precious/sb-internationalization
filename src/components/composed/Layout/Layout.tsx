import Head from "next/head";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props {
	children: React.ReactNode;
	noBodyWrapper?: boolean;
}

const Layout: React.FC<Props> = ({ children, noBodyWrapper }) => {
	return (
		<StyledLayout className="bg-blue">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					crossOrigin="true"
					href="https://fonts.gstatic.com"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@100;300;400;500;600;700;900&family=Manrope:wght@200;300;400;500;600;700&family=Nunito+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className="transition-all duration-500 ease-in-out">
				<div>
					<Navbar />
					{!noBodyWrapper ? (
						<div className="sb-content custom-container mx-auto">
							{children}
						</div>
					) : (
						<div className="sb-content">{children}</div>
					)}
				</div>
				<Footer />
			</main>
		</StyledLayout>
	);
};

const StyledLayout = styled.article`
	min-height: 100vh;

	& > main {
		overflow-x: hidden;

		& > div {
			max-width: 1440px;
			margin: 0 auto;
			flex-direction: column;
			justify-content: space-between;

			& > .sb-content {
				width: 100%;
				margin: auto;
				min-height: 78vh;
			}
		}
	}
`;

export default Layout;
