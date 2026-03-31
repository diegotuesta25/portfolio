import Icon from "./icon";

export default function Media() {
	return (
		<div className="flex flex-col gap-2 items-center fixed">
			<div className="bg-gray w-0.5 h-47.5" />
			<Icon icon="github" href="https://github.com/diegotuesta25" />
			<Icon icon="linkedin" href="http://www.linkedin.com/in/diego-tuesta" />
			<Icon icon="email" href="mailto:diegotuestav@gmail.com" />
		</div>
	);
}
