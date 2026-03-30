type TitleProps = {
	title: string;
	subtitle?: boolean;
	className?: string;
};

export default function Title({ title, subtitle, className }: TitleProps) {
	return (
		<div className="flex gap-4 items-center">
			<div className="flex font-medium text-3xl lg:text-4xl xl:text-5xl">
				<p className="text-primary">{subtitle ? "#" : "/"}</p>
				<p
					className={`text-white ${subtitle ? "font-medium" : "font-semibold"}`}
				>
					{title}
				</p>
			</div>
			<div className={`h-0.5 bg-primary ${className}`} />
		</div>
	);
}
