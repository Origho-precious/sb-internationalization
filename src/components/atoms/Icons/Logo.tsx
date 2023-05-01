/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

interface LogoProps {
	width?: number;
	height?: number;
	className?: string;
}

const Logo: FC<LogoProps> = ({ className, height, width }) => {
	return (
		<img
			alt="Artsy"
			className={className}
			style={{ height, width }}
			src="/images/icons/logo.svg"
		/>
	);
};

export default Logo;
