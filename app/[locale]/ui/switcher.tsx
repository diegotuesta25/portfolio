"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Switcher() {
	const [open, setOpen] = useState(false);
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	function switchLocale() {
		const newLocale = locale === "en" ? "es" : "en";
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
		setOpen(false);
	}

	return (
		<div className="flex flex-col text-gray font-medium gap-2 md:text-lg xl:text-xl">
			<button
				className="flex gap-1 cursor-pointer items-center"
				onClick={() => setOpen(prev => !prev)}
			>
				<p>{locale.toUpperCase()}</p>
				{open ? <ChevronUp /> : <ChevronDown />}
			</button>

			{open && (
				<button
					className="absolute mt-10 border border-gray px-3 py-1 cursor-pointer"
					onClick={switchLocale}
				>
					<p>{locale === "en" ? "ES" : "EN"}</p>
				</button>
			)}
		</div>
	);
}
