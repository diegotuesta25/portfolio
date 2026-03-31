"use client";
import { Link, MenuIcon, XIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Switcher from "./switcher";
import HeaderLink from "./header-link";
import Logo from "./logo";
import Icon from "./icon";

export default function BurgerMenu() {
	const [open, setOpen] = useState(false);

	const navLinks = [
		{ key: "home", href: "/" },
		{ key: "projects", href: "/projects" },
		{ key: "aboutMe", href: "/about-me" },
		{ key: "contacts", href: "/contacts" },
	];

	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations("nav");

	return (
		<>
			<button onClick={() => setOpen(true)}>
				<MenuIcon className="text-white" />
			</button>

			<div
				onClick={() => setOpen(false)}
				className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			/>

			<div
				className={`fixed top-0 left-0 h-full w-full z-50 bg-background flex flex-col gap-11 py-8 px-6
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<Logo width={50} height={50} className="h-7 w-7" />
						<p className="text-white font-bold md:text-lg xl:text-xl">Diego</p>
					</div>

					<button onClick={() => setOpen(false)} className="cursor-pointer">
						<XIcon className="text-white w-7 h-7" />
					</button>
				</div>

				<div className="flex flex-col gap-8 text-3xl">
					{navLinks.map(link => {
						const localizedHref = `/${locale}${link.href === "/" ? "" : link.href}`;
						const isActive =
							link.href === "/"
								? pathname === `/${locale}` || pathname === `/${locale}/`
								: pathname.startsWith(`/${locale}${link.href}`);

						return (
							<HeaderLink
								key={link.href}
								href={localizedHref}
								variant={isActive ? "active" : "default"}
								onClick={() => setOpen(false)}
							>
								{t(link.key)}
							</HeaderLink>
						);
					})}

					<Switcher />
				</div>
				<div className="flex flex-row gap-3 items-center justify-center">
					<Icon
						icon="github"
						href="https://github.com/diegotuesta25"
						width={50}
						height={50}
					/>
					<Icon
						icon="linkedin"
						href="http://www.linkedin.com/in/diego-tuesta"
						width={50}
						height={50}
					/>
					<Icon
						icon="email"
						href="mailto:diegotuestav@gmail.com"
						width={50}
						height={50}
					/>
				</div>
			</div>
		</>
	);
}
