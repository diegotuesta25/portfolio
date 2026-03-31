import type { Metadata } from "next";
import "./ui/globals.css";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { firaCode } from "./ui/fonts";
import Media from "./ui/media";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata: Metadata = {
	title: "Diego Tuesta | Portfolio",
	description: "Diego Tuesta Portfolio",
};

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!routing.locales.includes(locale as any)) notFound();

	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className={`${firaCode.className} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<div className="grid grid-cols-1 md:grid-cols-[minmax(0,170px)_minmax(630px,1fr)_minmax(0,170px)] px-5">
						<aside className="hidden md:flex flex-col items-start">
							<Media />
						</aside>
						<div className="px-4">
							<Header />
							<div className="py-7">{children}</div>
						</div>
						<aside className="hidden md:flex flex-col" />
					</div>
					<div className="h-0.5 w-full bg-gray" />
					<div className="grid grid-cols-1 md:grid-cols-[minmax(0,170px)_minmax(630px,1fr)_minmax(0,170px)]">
						<aside className="hidden md:flex flex-col" />
						<Footer />
						<aside className="hidden md:flex flex-col" />
					</div>
					<Toaster />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
