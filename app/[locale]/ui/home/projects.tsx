import { PlayIcon } from "lucide-react";
import Box from "../box";
import Button from "../button";
import Title from "../title";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ProjectsProps = {
	recent?: boolean;
	small?: boolean;
};

export default function Projects({
	recent = false,
	small = false,
}: ProjectsProps) {
	const t = useTranslations("projects");

	const recentProjects = [
		{
			src: "/taskboard-app.jpg",
			tools: "React Next.js Typescript HTML TailwindCSS Node.js",
			title: "Taskboard App",
			description: "appDescription1",
			href: "https://taskboard-app-bay-five.vercel.app/",
			live: true,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/taskboard-app",
		},
		{
			src: "/portfolio-picture.jpg",
			tools: "React Typescript HTML TailwindCSS",
			title: "Portfolio App",
			description: "appDescription2",
			href: "https://diegotuesta.site",
			live: true,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/portfolio",
		},
	];

	const smallProjects = [
		{
			src: "",
			tools: "React Typescript TailwindCSS",
			title: "Github User Finder App",
			description: "smallApp1",
			href: "",
			live: false,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/github-user-finder",
		},
		{
			src: "",
			tools: "React Typescript TailwindCSS",
			title: "Weather App",
			description: "smallApp2",
			href: "",
			live: false,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/weather-app",
		},
	];

	const projects = [
		{
			src: "/taskboard-app.jpg",
			tools: "React Next.js Typescript HTML TailwindCSS Node.js",
			title: "Taskboard App",
			description: "appDescription1",
			href: "https://taskboard-app-bay-five.vercel.app/",
			live: true,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/taskboard-app",
		},
		{
			src: "/portfolio-picture.jpg",
			tools: "React Typescript HTML TailwindCSS",
			title: "Portfolio App",
			description: "appDescription2",
			href: "https://diegotuesta.site",
			live: true,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/portfolio",
		},
	];

	const displayedProjects = small
		? smallProjects
		: recent
			? recentProjects
			: projects;

	return (
		<div className="flex flex-col w-full gap-12">
			{small ? (
				<div>
					<Title title={t("smallProjects")} subtitle />
				</div>
			) : recent ? (
				<div className="flex justify-between items-center flex-wrap">
					<Title
						title={t("title")}
						subtitle
						className=" w-10 md:w-30 lg:w-55 xl:w-100"
					/>
					<Link href="/projects" className="text-white font-medium">
						{t("viewAllBtn")}
					</Link>
				</div>
			) : (
				<div>
					<Title title={t("completeApps")} subtitle />
				</div>
			)}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{displayedProjects.map(p => (
					<Box
						key={p.description}
						src={p.src}
						title={p.tools}
						variant="text"
						className="flex flex-col gap-4 p-4"
					>
						<h1 className="text-white font-medium text-xl xl:text-2xl ">
							{p.title}
						</h1>
						<p>{t(p.description)}</p>
						<div className="flex gap-2">
							{p.live && (
								<Link href={p.href} target="_blank" rel="noopener noreferrer">
									<Button variant="primary">{t("liveBtn")} </Button>
								</Link>
							)}

							{p.demo && (
								<Button variant="secondary">
									Demo <PlayIcon width={15} />
								</Button>
							)}

							{p.github && (
								<Link
									href={p.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button variant="secondary">{`Github <~>`}</Button>
								</Link>
							)}
						</div>
					</Box>
				))}
			</div>
		</div>
	);
}
