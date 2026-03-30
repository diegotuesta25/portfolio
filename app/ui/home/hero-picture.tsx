import Image from "next/image";
import Dots from "./dots";
import Logo from "../logo";
import Box from "../box";

export default function HeroPicture() {
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
					Available for <span className="font-semibold text-white">work</span>
				</p>
			</Box>
		</div>
	);
}
