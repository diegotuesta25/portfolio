import Image from "next/image";
import Skills from "../ui/about-me/skills";
import Box from "../ui/box";
import AboutMe from "../ui/home/about-me";
import Title from "../ui/title";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export default function Page() {
	const t = useTranslations("aboutMe");

	const bold = (chunks: ReactNode) => (
		<span className="font-semibold text-white">{chunks}</span>
	);

	return (
		<div className="flex flex-col w-full gap-14 md:gap-28 md:pb-28">
			<div className="flex flex-col gap-5">
				<Title title={t("aboutMe")} />
				<AboutMe withTitle={false} />
			</div>

			<div className="flex flex-col gap-12">
				<Title title="skills" subtitle />
				<Skills />
			</div>
			<Title title={t("howIThink")} subtitle />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
				<div className="flex flex-wrap gap-3">
					<Box className="p-2">{t.rich("t1", { b: bold })}</Box>
					<Box className="p-2">{t.rich("t2", { b: bold })}</Box>
					<Box className="p-2">{t.rich("t3", { b: bold })}</Box>
					<Box className="p-2">{t.rich("t4", { b: bold })}</Box>
					<Box className="p-2">{t.rich("t5", { b: bold })}</Box>
				</div>
				<Image
					src="/illustrations-2.svg"
					width={500}
					height={500}
					alt="illustrations-2"
					className="hidden lg:block w-full h-auto object-cover"
				/>
			</div>
		</div>
	);
}
