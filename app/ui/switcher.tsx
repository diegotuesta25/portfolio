"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Switcher() {
	const [open, setOpen] = useState(false);
	const [isEnSelected, setIsEnSelected] = useState(true);

	const handleClick = () => {
		setIsEnSelected(prev => !prev);
		setOpen(prev => !prev);
	};

	return (
		<div className="flex flex-col text-gray font-medium gap-2 md:text-lg xl:text-xl">
			<button
				className="flex gap-1 cursor-pointer items-center"
				onClick={() => setOpen(prev => !prev)}
			>
				{isEnSelected ? <p>EN</p> : <p>ES</p>}
				{open ? <ChevronUp /> : <ChevronDown />}
			</button>
			{open && (
				<button
					className=" absolute mt-7 border border-gray px-3 py-1 cursor-pointer"
					onClick={handleClick}
				>
					{isEnSelected ? <p>ES</p> : <p>EN</p>}
				</button>
			)}
		</div>
	);
}
