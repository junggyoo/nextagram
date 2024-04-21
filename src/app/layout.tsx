import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/header";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nextagram",
	description: "Nextagram",
};

export default function RootLayout({
	children,
	params: { session },
}: {
	children: React.ReactNode;
	params: { session: Session };
}) {
	return (
		<html lang="en" data-theme="light" className={openSans.className}>
			<body className="w-full max-w-screen-xl overflow-auto mx-auto">
				<SessionProvider session={session}>
					<Header />
					<main>{children}</main>
				</SessionProvider>
			</body>
		</html>
	);
}
