import Image from "next/image";
import Box from "../box";
import { useTranslations } from "next-intl";

export default function HeroPicture() {
	const t = useTranslations("hero");

	return (
		<div className="flex flex-col items-center justify-center">
			<Image
				src="/diego-profile.png"
				width={5000}
				height={5000}
				alt="Diego Picture"
				className=" z-10 object-cover max-w-110 md:w-full md:max-w-full"
				priority
			/>
			<Box className="flex items-center px-5 py-1">
				<div className="bg-primary border border-gray w-4 h-4" />
				<p className="text-sm lg:text-lg xl:text-xl">
					{t.rich("textBox", {
						bold: chunks => (
							<span className="font-semibold text-white">{chunks}</span>
						),
					})}
				</p>
			</Box>
		</div>
	);
}
