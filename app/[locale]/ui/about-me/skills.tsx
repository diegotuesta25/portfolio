import { useTranslations } from "next-intl";
import Box from "../box";

export default function Skills() {
	const t = useTranslations("aboutMe");

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
			<Box variant="title" title={t("frontend")} className="p-2">
				React Next.js TypeScript JavaScript Zustand TanStack Query Accessibility
				HTML5 CSS / SCSS
			</Box>

			<Box
				variant="title"
				title={t("design")}
				className="p-2 col-start-2 row-start-3"
			>
				Tailwind CSS Material UI Figma
			</Box>

			<Box
				variant="title"
				title={t("backend")}
				className="p-2 col-start-3 row-start-3"
			>
				Node.js PostgreSQL
			</Box>

			<Box
				variant="title"
				title={t("testing")}
				className="p-2 col-start-4 row-start-4"
			>
				Jest React Testing Library
			</Box>
			<Box
				variant="title"
				title={t("tools")}
				className="p-2 col-start-4 row-start-4"
			>
				Git VS Code Vercel
			</Box>
		</div>
	);
}
