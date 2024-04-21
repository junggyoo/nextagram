"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import {
	HomeFillIcon,
	HomeIcon,
	NewFillIcon,
	NewIcon,
	SearchFillIcon,
	SearchIcon,
} from "./ui/icons";
import ColorButton from "./ui/buttons/ColorButton";

const menu = [
	{
		title: "Home",
		icon: <HomeIcon />,
		activeIcon: <HomeFillIcon />,
		href: "/",
	},
	{
		title: "Search",
		icon: <SearchIcon />,
		activeIcon: <SearchFillIcon />,
		href: "/search",
	},
	{
		title: "New",
		icon: <NewIcon />,
		activeIcon: <NewFillIcon />,
		href: "/new",
	},
];

export default function NavBar() {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<div className="flex items-center justify-between p-3">
			<Link href="/">
				<h1 className="text-3xl font-bold">Nextagram</h1>
			</Link>
			<nav className="flex">
				<ul className="flex items-center gap-x-5 menu-md menu-horizontal bg-base-200 rounded-box">
					{menu.map((item) => (
						<li key={item.title}>
							<Link
								prefetch
								href={item.href}
								className="flex items-center justify-center"
							>
								{pathname === item.href ? item.activeIcon : item.icon}
							</Link>
						</li>
					))}
					<ColorButton onClick={() => router.push("/login")}>
						Sign in
					</ColorButton>
				</ul>
			</nav>
		</div>
	);
}
