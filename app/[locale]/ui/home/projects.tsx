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
			src: "/todolistapp-picture.png",
			tools: "React Next.js Typescript HTML Tailwind Node.js",
			title: "To Do List App",
			description: "appDescription1",
			href: "https://to-do-list-app-bay-five.vercel.app/",
			live: true,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/to-do-list-app",
		},
	];

	const smallProjects = [
		{
			src: "",
			tools: "React Redux",
			title: "Pokemon App",
			description: "smallApp1",
			href: "https://www.google.com",
			live: false,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/to-do-list-app",
		},
	];

	const projects = [
		{
			src: "/todolistapp-picture.png",
			tools: "React Next.js Typescript HTML Tailwind Node.js",
			title: "To Do List App",
			description: "appDescription1",
			href: "https://to-do-list-app-bay-five.vercel.app/",
			live: true,
			demo: false,
			github: true,
			githubUrl: "https://github.com/diegotuesta25/to-do-list-app",
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
						key={p.href}
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
