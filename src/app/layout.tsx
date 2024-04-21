import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/header";
import AuthContext from "@/context/AuthContext";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nextagram",
	description: "Nextagram",
};

export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="light" className={openSans.className}>
			<body className="w-full max-w-screen-xl overflow-auto mx-auto">
				<AuthContext>
					<Header />
					<main>{children}</main>
				</AuthContext>
			</body>
		</html>
	);
}
