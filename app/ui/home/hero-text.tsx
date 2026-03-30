import Link from "next/link";
import Button from "../button";

export default function HeroText() {
	return (
		<div className="flex flex-col items-start gap-6 justify-center">
			<p className="font-semibold text-3xl lg:text-4xl xl:text-5xl text-white">
				Diego is a <span className="text-primary">front-end developer</span> and{" "}
				<span className="text-primary">problem solver</span>
			</p>
			<p className="text-gray text-base lg:text-lg xl:text-xl">
				He crafts responsive websites where technologies meet creativity
			</p>
			<div className="flex md:flex-col xl:text-lg xl:flex-row gap-3 text-base">
				<Link href="/contacts">
					<Button variant="primary">Contact me!!</Button>
				</Link>
				<Button variant="secondary">Download CV</Button>
			</div>
		</div>
	);
}
