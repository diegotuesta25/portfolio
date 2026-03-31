import { useTranslations } from "next-intl";
import Projects from "../ui/home/projects";
import Title from "../ui/title";

export default function Page() {
	const t = useTranslations("projects");
	return (
		<div className="flex flex-col w-full gap-14 pb-14 md:gap-28 md:pb-28">
			<Title title={t("title")} />
			<Projects />
			<Projects small />
		</div>
	);
}
