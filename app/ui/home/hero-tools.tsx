import Icon from "../icon";

export default function HeroTools() {
	const tools = [
		{ icon: "react", name: "React" },
		{ icon: "nextjs", name: "Next.js" },
		{ icon: "tailwind", name: "Tailwind" },
		{ icon: "typescript", name: "Typescript" },
		{ icon: "git", name: "Git" },
	] as const;

	return (
		<div className="flex flex-wrap justify-center gap-5">
			{tools.map(tool => (
				<div
					key={tool.icon}
					className="flex items-center justify-center gap-2 md:w-45"
				>
					<Icon icon={tool.icon} />
					<p className="hidden md:block text-gray">{tool.name}</p>
				</div>
			))}
		</div>
	);
}
