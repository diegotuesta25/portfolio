import { useTranslations } from "next-intl";
import Box from "../box";

export default function Skills() {
	const t = useTranslations("aboutMe");

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
			<Box variant="title" title={t("languages")} className="p-2">
				TypeScript JavaScript HTML
			</Box>

			<Box
				variant="title"
				title={t("frameworks")}
				className="p-2 col-start-2 row-start-3"
			>
				React Next.js Tailwind
			</Box>

			<Box
				variant="title"
				title={t("tools")}
				className="p-2 col-start-3 row-start-3"
			>
				Git Figma VSCode
			</Box>

			<Box
				variant="title"
				title={t("databases")}
				className="p-2 col-start-4 row-start-4"
			>
				PostgreSQL
			</Box>
		</div>
	);
}
