import clsx from "clsx";
import Link from "next/link";

type HeaderVariant = "default" | "active";

type HeaderLinkProps = {
	variant?: HeaderVariant;
	href: string;
	children: React.ReactNode;
};

export default function HeaderLink({
	variant = "default",
	href,
	children,
}: HeaderLinkProps) {
	return (
		<Link
			href={href}
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
