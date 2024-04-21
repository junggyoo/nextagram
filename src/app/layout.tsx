import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import NavBar from "@/components/nav-bar";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nextagram",
	description: "Nextagram",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="light" className={openSans.className}>
			<body className="w-full max-w-screen-xl overflow-auto mx-auto">
				<header className="sticky top-0 bg-white z-10 border-b">
					<NavBar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
