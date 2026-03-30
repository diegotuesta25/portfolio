import HeroPicture from "./hero-picture";
import HeroText from "./hero-text";
import HeroTools from "./hero-tools";

export default function Hero() {
	return (
		<div className="flex w-full flex-col gap-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<HeroText />
				<HeroPicture />
			</div>
			<HeroTools />
		</div>
	);
}
