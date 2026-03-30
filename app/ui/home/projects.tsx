import { PlayIcon } from "lucide-react";
import Box from "../box";
import Button from "../button";
import Title from "../title";
import Link from "next/link";

type ProjectsProps = {
	recent?: boolean;
	small?: boolean;
};

export default function Projects({
	recent = false,
	small = false,
}: ProjectsProps) {
	const recentProjects = [
		{
			src: "/todolistapp-picture.png",
			tools: "React Next.js Typescript HTML Tailwind Node.js",
			title: "To Do List App",
			description:
				"Manage your daily tasks: track what’s done, pending, and in progress.",
			href: "https://to-do-list-app-bay-five.vercel.app/",
			live: true,
			demo: true,
			github: false,
		},
	];

	const smallProjects = [
		{
			src: "",
			tools: "React Redux",
			title: "Pokemon App",
			description: "Fetch all the pokemons.",
			href: "https://www.google.com",
			live: false,
			demo: false,
			github: true,
		},
		{
			src: "",
			tools: "React Redux Figma",
			title: "Naruto App",
			description: "Fetch all the Narutos.",
			href: "https://www.facebook.com",
			live: false,
			demo: false,
			github: true,
		},
		{
			src: "",
			tools: "React Python FastApi Figma",
			title: "Goku App",
			description: "Fetch all the Gokus.",
			href: "https://www.instagram.com",
			live: false,
			demo: false,
			github: true,
		},
		{
			src: "",
			tools: "React Redux PostgreSQL Figma",
			title: "Death Note App",
			description: "Fetch all the Death Notes.",
			href: "https://www.tiktok.com",
			live: false,
			demo: false,
			github: true,
		},
	];

	const projects = [
		{
			src: "/todolistapp-picture.png",
			tools: "React Next.js Typescript HTML Tailwind Node.js",
			title: "To Do List App",
			description:
				"Manage your daily tasks: track what’s done, pending, and in progress.",
			href: "https://to-do-list-app-bay-five.vercel.app/",
			live: true,
			demo: false,
			github: false,
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
					<Title title="small-projects" subtitle />
				</div>
			) : recent ? (
				<div className="flex justify-between items-center">
					<Title title="projects" subtitle className=" w-15 lg:w-80 xl:w-160" />
					<Link
						href="/projects"
						className="text-white font-medium"
					>{`View all ~~>`}</Link>
				</div>
			) : (
				<div>
					<Title title="complete-apps" subtitle />
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{displayedProjects.map(p => (
					<Box
						key={p.href}
						src={p.src}
						title={p.tools}
						variant="text"
						className="flex flex-col gap-4 p-4"
					>
						<h1 className="text-white font-medium text-2xl ">{p.title}</h1>
						<p>{p.description}</p>
						<div className="flex gap-2">
							{p.live && (
								<Link href={p.href} target="_blank" rel="noopener noreferrer">
									<Button variant="primary">{`Live <~>`} </Button>
								</Link>
							)}

							{p.demo && (
								<Button variant="secondary">
									Demo <PlayIcon width={20} />
								</Button>
							)}

							{p.github && (
								<Link
									href="https://github.com/diegotuesta25"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button variant="primary">{`Github <~>`} </Button>
								</Link>
							)}
						</div>
					</Box>
				))}
			</div>
		</div>
	);
}
