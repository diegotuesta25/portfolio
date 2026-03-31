import AboutMe from "./ui/home/about-me";
import Hero from "./ui/home/hero";
import Skills from "./ui/home/skills";
import Contacts from "./ui/home/contacts";
import Projects from "./ui/home/projects";

export default function Home() {
	return (
		<div className="flex flex-col gap-14 pb-14 md:gap-28 md:pb-28">
			<Hero />
			<Projects recent />
			<Skills />
			<AboutMe />
			<Contacts />
		</div>
	);
}
