import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../atoms/Icons/Logo";
import LanguageDropdown from "../../atoms/LanguageDropdown/LanguageDropdown";

const dropdownOptions = ["English [US]", "French [FR]", "German [DE]"];
const links = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Templates",
		href: "/templates",
	},
];
const Navbar = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(dropdownOptions[0]);

	return (
		<nav className="flex items-center justify-between py-3">
			<div className="flex items-center">
				<Link href="/" className="mr-4">
					<Logo />
				</Link>

				<LanguageDropdown
					options={dropdownOptions}
					selectedOption={selectedLanguage}
					onSelect={(option) => setSelectedLanguage(option)}
				/>
			</div>

			<div className="flex items-center">
				{links.map((link, index) => (
					<Link
						href={link.href}
						key={link.name}
						className="text-secondary text-sm font-semibold mr-4 transition-all duration-300 ease-in-out hover:text-slate-500"
					>
						{link.name}
					</Link>
				))}
				<Button className="font-chakra ml-12">Get Started</Button>
			</div>
		</nav>
	);
};

const Button = styled.button`
	font-size: 12px;
	border-radius: 2px;
	padding: 6px 10px;
	border: 2px solid #00b3b0;
	box-shadow: 3px 2px 0px #1b243f;
	transition: all 0.3s ease-in-out;

	&:hover {
		box-shadow: 4px 3px 0px #1b243f;
	}
`;

export default Navbar;
