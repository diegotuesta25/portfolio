import type { Metadata } from "next";
import "./ui/globals.css";
import { firaCode } from "./ui/fonts";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Media from "./ui/media";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "Diego Tuesta | Portfolio",
	description: "Diego Tuesta Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${firaCode.className} antialiased`}>
				<div className="grid grid-cols-1 md:grid-cols-[minmax(0,170px)_minmax(630px,1fr)_minmax(0,170px)] px-5">
					<aside className="hidden md:flex flex-col items-start">
						<Media />
					</aside>
					<div className="px-4">
						<Header />
						<div className="py-7">{children}</div>
					</div>

					<aside className="hidden md:flex flex-col " />
				</div>
				<Toaster />
				<div className="h-0.5 w-full bg-gray" />
				<div className="grid grid-cols-1 md:grid-cols-[minmax(0,170px)_minmax(630px,1fr)_minmax(0,170px)]">
					<aside className="hidden md:flex flex-col" />
					<Footer />
					<aside className="hidden md:flex flex-col " />
				</div>
			</body>
		</html>
	);
}
