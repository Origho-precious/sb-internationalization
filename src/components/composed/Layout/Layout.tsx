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
					href="https://fonts.gstatic.com"
					crossOrigin=""
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
					<Footer />
				</div>
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
