type DotsProps = {
	rows?: number;
};

export default function Dots({ rows = 5 }: DotsProps) {
	return (
		<div className="flex gap-4">
			{[...Array(rows)].map((_, rowIndex) => (
				<div key={rowIndex} className="flex flex-col gap-4">
					{[...Array(5)].map((_, colIndex) => (
						<div key={colIndex} className=" size-1.5 rounded-full bg-gray" />
					))}
				</div>
			))}
		</div>
	);
}
