import Image from "next/image";
import Title from "../title";

type AboutMeProps = {
	withTitle?: boolean;
};

export default function AboutMe({ withTitle = true }: AboutMeProps) {
	return (
		<div className="flex flex-col w-full gap-12">
			{withTitle && (
				<Title title="about-me" subtitle className=" w-20 lg:w-60 xl:w-120" />
			)}

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full">
				<div className="flex flex-col gap-4 text-gray">
					<p>Hello, I'm Diego!</p>{" "}
					<p>
						I'm a front-end developer based in Lima, Peru, with a degree in
						Informatics Engineering from the Pontifical Catholic University of
						Peru, the top university in the country.
					</p>{" "}
					<p>
						I specialize in building responsive, modern web experiences from
						scratch, turning ideas into clean and functional interfaces.
						Bridging technical knowledge with a strong eye for design has been
						my drive since I started coding.
					</p>
					<p>
						{" "}
						I'm currently focused on growing as a front-end developer, working
						with technologies like React, Next.js, TypeScript and Tailwind to
						build fast and user-friendly products. I'm always pushing to learn
						what's next in the frontend world and looking for the right team to
						grow with.
					</p>
				</div>
				<Image
					src="/diego-profile-2.png"
					width={800}
					height={800}
					alt="Diego Picture"
					className=" z-10 object-cover w-full h-auto"
					priority
				/>
			</div>
		</div>
	);
}
