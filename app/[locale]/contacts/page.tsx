import { useTranslations } from "next-intl";
import Contacts from "../ui/home/contacts";
import Title from "../ui/title";

export default function Page() {
	const t = useTranslations("contact");
	return (
		<div className="flex flex-col w-full gap-14 pb-4 md:gap-28 md:pb-50">
			<Title title={t("mainTitle")} />
			<Contacts withTitle={false} />
		</div>
	);
}
