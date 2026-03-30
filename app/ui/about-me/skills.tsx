import Box from "../box";

export default function Skills() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
			<Box variant="title" title="Languages" className="p-2">
				TypeScript JavaScript HTML
			</Box>

			<Box
				variant="title"
				title="Frameworks"
				className="p-2 col-start-2 row-start-3"
			>
				React Next.js Tailwind
			</Box>

			<Box
				variant="title"
				title="Tools"
				className="p-2 col-start-3 row-start-3"
			>
				Git Figma VSCode
			</Box>

			<Box
				variant="title"
				title="Databases"
				className="p-2 col-start-4 row-start-4"
			>
				PostgreSQL
			</Box>
		</div>
	);
}
