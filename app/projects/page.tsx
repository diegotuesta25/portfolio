import Projects from "../ui/home/projects";
import Title from "../ui/title";

export default function Page() {
	return (
		<div className="flex flex-col w-full gap-14 pb-14 md:gap-28 md:pb-28">
			<Title title="projects" />
			<Projects />
			<Projects small />
		</div>
	);
}
