type InputProps = {
	type?: "text" | "email";
	placeholder?: string;
	disabled?: boolean;
	name?: string;
	value?: string;
	error?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	multiline?: boolean;
	rows?: number;
};

export default function Input({
	type,
	placeholder,
	disabled,
	value,
	name,
	error,
	onChange,
	multiline,
	rows = 4,
}: InputProps) {
	const sharedStyles = `border border-gray text-gray outline-none px-2 py-1`;

	return (
		<div className="w-full">
			{multiline ? (
				<div className="relative w-full">
					<textarea
						className={`peer w-full border text-sm text-gray border-gray bg-transparent px-2 py-2 outline-none transition-all hover:border-white not-placeholder-shown:border-white focus:border-white resize-none`}
						value={value}
						disabled={disabled}
						onChange={onChange}
						rows={rows}
						placeholder=""
						name={name}
						required
					/>
					<label className="absolute h-3 left-2 top-1 text-gray transition-all peer-hover:-top-2 peer-hover:text-sm peer-hover:bg-background peer-hover:px-1 peer-focus:-top-2 peer-focus:text-sm peer-hover:text-white peer-focus:bg-background peer-focus:text-white peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-white">
						{placeholder}
					</label>
				</div>
			) : (
				<div className="relative w-full">
					<input
						value={value}
						type={type}
						disabled={disabled}
						name={name}
						required
						placeholder=""
						onChange={onChange}
						className="peer w-full border text-sm text-gray border-gray bg-transparent px-2 py-2 outline-none transition-all hover:border-white not-placeholder-shown:border-white focus:border-white"
					/>
					<label className="absolute h-3 left-2 top-1.5 text-gray transition-all peer-hover:-top-2 peer-hover:text-sm peer-hover:bg-background peer-hover:px-1 peer-focus:-top-2 peer-focus:text-sm peer-hover:text-white peer-focus:bg-background peer-focus:text-white peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-white">
						{placeholder}
					</label>
				</div>
			)}
		</div>
	);
}
