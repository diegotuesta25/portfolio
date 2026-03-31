"use client";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import HeaderLink from "./header-link";

const navLinks = [
	{ key: "home", href: "/" },
	{ key: "projects", href: "/projects" },
	{ key: "aboutMe", href: "/about-me" },
	{ key: "contacts", href: "/contacts" },
];

export default function NavLinks() {
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations("nav");

	return (
		<div className="flex gap-8">
			{navLinks.map(link => {
				const localizedHref = `/${locale}${link.href === "/" ? "" : link.href}`;
				const isActive =
					link.href === "/"
						? pathname === `/${locale}` || pathname === `/${locale}/`
						: pathname.startsWith(`/${locale}${link.href}`);

				return (
					<HeaderLink
						key={link.href}
						variant={isActive ? "active" : "default"}
						href={localizedHref}
					>
						{t(link.key)}
					</HeaderLink>
				);
			})}
		</div>
	);
}
