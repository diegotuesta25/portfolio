import Image from "next/image";
import Link from "next/link";

export type IconVariant =
	| "email"
	| "github"
	| "linkedin"
	| "git"
	| "nextjs"
	| "react"
	| "tailwind"
	| "typescript";

type IconProps = {
	icon: IconVariant;
	href?: string;
	width?: number;
	height?: number;
	className?: string;
};

const iconByVariant = {
	email: "/email.svg",
	github: "/github.svg",
	linkedin: "/linkedin.svg",
	git: "/git.svg",
	nextjs: "/nextjs.svg",
	react: "/react.svg",
	tailwind: "/tailwind.svg",
	typescript: "/typescript.svg",
} as const;

export default function Icon({
	icon,
	href = "",
	width = 35,
	height = 35,
	className = "",
}: IconProps) {
	const image = (
		<Image
			src={iconByVariant[icon]}
			width={width}
			height={height}
			alt={icon}
			className={className}
		/>
	);

	const isEmail = href?.includes("mailto:diegotuestav@gmail.com");

	return !href ? (
		image
	) : isEmail ? (
		<a href={href}>{image}</a>
	) : (
		<Link href={href} target="_blank" rel="noopener noreferrer">
			{image}
		</Link>
	);
}
