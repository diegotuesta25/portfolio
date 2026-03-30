import Image from "next/image";
import Skills from "../ui/about-me/skills";
import Box from "../ui/box";
import AboutMe from "../ui/home/about-me";
import Title from "../ui/title";

export default function Page() {
	return (
		<div className="flex flex-col w-full gap-14 md:gap-28 md:pb-28">
			<div className="flex flex-col gap-5">
				<Title title="about-me" />
				<AboutMe withTitle={false} />
			</div>

			<div className="flex flex-col gap-12">
				<Title title="skills" subtitle />
				<Skills />
			</div>
			<Title title="how-I-think" subtitle />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
				<div className="flex flex-wrap gap-3">
					<Box className="p-2">
						I approach development by{" "}
						<span className="text-white font-semibold">
							building things from scratch{" "}
						</span>
						and{" "}
						<span className="text-white font-semibold">
							understanding how they work{" "}
						</span>
						internally.
					</Box>
					<Box className="p-2">
						I enjoy{" "}
						<span className="text-white font-semibold">
							turning ideas into real
						</span>
						, functional products through{" "}
						<span className="text-white font-semibold">hands-on practice</span>.
					</Box>
					<Box className="p-2">
						I pay close attention not only to{" "}
						<span className="text-white font-semibold">how things work</span>,
						but also to{" "}
						<span className="text-white font-semibold">
							how they feel and look
						</span>
						.
					</Box>
					<Box className="p-2">
						I care about{" "}
						<span className="text-white font-semibold">
							creating interfaces
							<span className="font-normal text-gray"> that are</span> clean,
							intuitive,<span className="font-normal text-gray"> and </span>
							user-friendly
						</span>
						.
					</Box>
					<Box className="p-2">
						I’m constantly{" "}
						<span className="text-white font-semibold">
							learning by building, iterating and improving
						</span>{" "}
						with every project.
					</Box>
				</div>
				<Image
					src="/illustrations-2.svg"
					width={500}
					height={500}
					alt="illustrations-2"
					className="hidden lg:block w-full h-auto object-cover"
				/>
			</div>
		</div>
	);
}
