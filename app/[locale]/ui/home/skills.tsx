import Image from "next/image";
import Title from "../title";
import Box from "../box";
import { useTranslations } from "next-intl";

export default function Skills() {
	const t = useTranslations("aboutMe");
	return (
		<div className="flex flex-col w-full gap-12">
			<Title title={t("skills")} subtitle className=" w-10 lg:w-40 xl:w-80" />
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-20">
				<div className="hidden lg:block w-full">
					<Image
						src="/skills-illustration.png"
						width={500}
						height={500}
						alt="skills-illustrations"
						className="object-cover w-full h-auto"
					/>
				</div>
				<div className="flex flex-wrap justify-center gap-2">
					<Box variant="title" title={t("languages")} className="p-2">
						TypeScript JavaScript HTML
					</Box>
					<Box variant="title" title={t("frameworks")} className="p-2">
						React Next.js Tailwind
					</Box>
					<Box variant="title" title={t("tools")} className="p-2 ">
						Git Figma VSCode
					</Box>
					<Box variant="title" title={t("databases")} className="p-2 ">
						PostgreSQL
					</Box>
				</div>
			</div>
		</div>
	);
}
