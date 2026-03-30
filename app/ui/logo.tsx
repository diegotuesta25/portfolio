import Image from "next/image";

type LogoVariant = "primary" | "secondary";

type LogoProps = {
	variant?: LogoVariant;
	width?: number;
	height?: number;
	className?: string;
};

const logoByVariant = {
	primary: "/logo.png",
	secondary: "/logo-outline.svg",
} as const;

export default function Logo({
	variant = "primary",
	width = 230,
	height = 230,
	className,
}: LogoProps) {
	return (
		<Image
			src={logoByVariant[variant]}
			width={width}
			height={height}
			alt="logo"
			className={className}
			priority
		/>
	);
}
