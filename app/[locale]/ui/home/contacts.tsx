import { useTranslations } from "next-intl";
import EmailForm from "../email-form";
import Title from "../title";

type ContactsProps = {
	withTitle?: boolean;
};

export default function Contacts({ withTitle = true }: ContactsProps) {
	const t = useTranslations("contact");
	return (
		<div className="flex flex-col w-full gap-12">
			{withTitle && (
				<Title
					title={t("mainTitle")}
					subtitle
					className=" w-10 lg:w-30 xl:w-60"
				/>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-40 items-center">
				<div className="text-gray">{t("text")}</div>
				<EmailForm />
			</div>
		</div>
	);
}
