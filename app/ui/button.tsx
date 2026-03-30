import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
	variant: ButtonVariant;
	children: React.ReactNode;
	isSubmit?: boolean;
};

export default function Button({
	variant,
	children,
	isSubmit = false,
}: ButtonProps) {
	return (
		<button
			type={isSubmit ? "submit" : "button"}
			className={clsx(
				"flex gap-2 border px-3 py-2 cursor-pointer items-center justify-center transition-all",
				{
					"text-white border-primary hover:bg-primary/20":
						variant === "primary",
				},
				{ "text-gray border-gray hover:bg-gray/20 ": variant === "secondary" },
			)}
		>
			{children}
		</button>
	);
}
