import Link from "next/link";
import Logo from "./logo";
import NavLinks from "./nav-links";
import Switcher from "./switcher";
import BurgerMenu from "./burger-menu";

export default function Header() {
	return (
		<div className="flex pt-8 justify-between w-full pb-2">
			<Link href="/" className="flex gap-2 items-center">
				<Logo width={50} height={50} className="h-7 w-7" />
				<p className="text-white font-bold md:text-lg xl:text-xl">Diego</p>
			</Link>
			<div className="hidden gap-8 items-center md:flex">
				<NavLinks />
				<Switcher />
			</div>
			<div className="flex md:hidden">
				<BurgerMenu />
			</div>
		</div>
	);
}
