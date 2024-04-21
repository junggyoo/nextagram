import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/nav-bar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en" data-theme="light">
			<body className={inter.className}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
