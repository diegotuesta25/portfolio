import clsx from "clsx";
import Link from "next/link";

type HeaderVariant = "default" | "active";

type HeaderLinkProps = {
	variant?: HeaderVariant;
	href: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export default function HeaderLink({
	variant = "default",
	href,
	children,
	onClick,
}: HeaderLinkProps) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className={clsx(
				"flex transition-all md:text-lg xl:text-xl",
				{
					"text-gray font-normal hover:text-white": variant === "default",
				},
				{
					"text-white font-medium": variant === "active",
				},
			)}
		>
			<p className="text-primary">#</p>
			{children}
		</Link>
	);
}
