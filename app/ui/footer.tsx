import Icon from "./icon";
import Logo from "./logo";

export default function Footer() {
	return (
		<div className="flex flex-col py-8 gap-12 px-4">
			<div className="flex items-center justify-between flex-col md:flex-row gap-5 ">
				<div className="flex flex-col gap-4 items-center md:items-start">
					<div className="flex gap-6 items-center">
						<div className="flex gap-2 items-center">
							<Logo width={50} height={50} className="h-7 w-7" />
							<p className="text-white font-medium">Diego</p>
						</div>
						<p className="text-gray">diegotuestav@gmail.com</p>
					</div>
					<p className="text-white">Front-end developer</p>
				</div>
				<div className="flex flex-col gap-3 items-center md:items-start">
					<h1 className="font-medium text-2xl text-white">Media</h1>
					<div className="flex gap-2">
						<Icon icon="github" href="https://github.com/diegotuesta25" />
						<Icon
							icon="linkedin"
							href="http://www.linkedin.com/in/diego-tuesta"
						/>
						<Icon icon="email" href="mailto:diegotuestav@gmail.com" />
					</div>
				</div>
			</div>
			<p className="text-gray text-center">© 2026 Diego Tuesta</p>
		</div>
	);
}
