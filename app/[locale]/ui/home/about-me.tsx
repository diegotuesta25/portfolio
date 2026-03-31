import Image from "next/image";
import Title from "../title";
import { useTranslations } from "next-intl";

type AboutMeProps = {
	withTitle?: boolean;
};

export default function AboutMe({ withTitle = true }: AboutMeProps) {
	const t = useTranslations("aboutMe");
	return (
		<div className="flex flex-col w-full gap-12">
			{withTitle && (
				<Title
					title={t("aboutMe")}
					subtitle
					className=" w-20 lg:w-60 xl:w-120"
				/>
			)}

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full">
				<div className="flex flex-col gap-4 text-gray">
					<p>{t("p1")}</p>
					<p>{t("p2")}</p>
					<p>{t("p3")}</p>
					<p>{t("p4")}</p>
				</div>
				<Image
					src="/diego-profile-2.png"
					width={440}
					height={440}
					alt="Diego Picture"
					className=" z-10 object-cover w-full h-auto"
					priority
					sizes="(max-width: 768px) 440px, 100vw"
				/>
			</div>
		</div>
	);
}
