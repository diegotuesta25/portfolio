"use client";
import { usePathname } from "next/navigation";
import HeaderLink from "./header-link";

const navLinks = [
	{ name: "home", href: "/" },
	{ name: "projects", href: "/projects" },
	{ name: "about-me", href: "/about-me" },
	{ name: "contacts", href: "/contacts" },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<div className="flex gap-8">
			{navLinks.map(link => {
				const isActive =
					link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
				return (
					<HeaderLink
						key={link.href}
						variant={isActive ? "active" : "default"}
						href={link.href}
					>
						{link.name}
					</HeaderLink>
				);
			})}
		</div>
	);
}
