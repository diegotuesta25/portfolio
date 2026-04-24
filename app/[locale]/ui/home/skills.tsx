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
					<Box variant="title" title={t("frontend")} className="p-2">
						React Next.js TypeScript JavaScript Zustand TanStack Query
						Accessibility HTML5 CSS / SCSS
					</Box>
					<Box variant="title" title={t("design")} className="p-2">
						Tailwind CSS Material UI Figma
					</Box>
					<Box variant="title" title={t("backend")} className="p-2 ">
						Node.js PostgreSQL
					</Box>
					<Box variant="title" title={t("testing")} className="p-2 ">
						Jest React Testing Library
					</Box>
					<Box variant="title" title={t("tools")} className="p-2 ">
						Git VS Code Vercel
					</Box>
				</div>
			</div>
		</div>
	);
}
