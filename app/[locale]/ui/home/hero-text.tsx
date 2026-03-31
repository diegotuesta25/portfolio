"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Button from "../button";

export default function HeroText() {
	const t = useTranslations("hero");
	const locale = useLocale();

	return (
		<div className="flex flex-col items-start gap-6 justify-center">
			<p className="font-semibold text-3xl lg:text-4xl xl:text-5xl text-white">
				{t.rich("title", {
					primary: chunks => <span className="text-primary">{chunks}</span>,
				})}
			</p>
			<p className="text-gray text-base lg:text-lg xl:text-xl">
				{t("subtitle")}
			</p>
			<div className="flex md:flex-col xl:text-lg xl:flex-row gap-3 text-base">
				<Link href={`/${locale}/contacts`}>
					<Button variant="primary">{t("contactBtn")}</Button>
				</Link>
				<a href="/CV_Diego_Tuesta.pdf" download>
					<Button variant="secondary">{t("downloadCV")}</Button>
				</a>
			</div>
		</div>
	);
}
