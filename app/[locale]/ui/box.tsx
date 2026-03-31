import clsx from "clsx";
import Image from "next/image";

type BoxVariant = "text" | "title";

type BoxProps = {
	src?: string;
	title?: string;
	children: React.ReactNode;
	variant?: BoxVariant;
	className?: string;
};

export default function Box({
	src,
	title,
	children,
	variant = "text",
	className,
}: BoxProps) {
	return (
		<div className="flex flex-col">
			{src && (
				<Image
					src={src}
					width={1000}
					height={1000}
					alt={title ?? "no-image"}
					className="w-full h-auto border border-b-0 border-gray object-contain"
					priority
				/>
			)}
			{title && (
				<div
					className={clsx(
						"border border-b-0 border-gray p-2",
						{
							"font-semibold text-white": variant === "title",
						},
						{
							"text-gray": variant === "text",
						},
					)}
				>
					{title}
				</div>
			)}
			<div className={`border border-gray gap-2 text-gray ${className}`}>
				{children}
			</div>
		</div>
	);
}
