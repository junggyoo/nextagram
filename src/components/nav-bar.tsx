"use client";

import { usePathname } from "next/navigation";
import { Home, Search, SquarePlus } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 flex justify-between p-5">
			<h1 className="text-2xl">Nextagram</h1>
			<div className="flex items-center gap-2">
				<ul className="menu-md menu-horizontal bg-base-200 rounded-box">
					<li>
						<Link className="flex items-center justify-center" href="/">
							<Home color={pathname === "/" ? "black" : "gray"} />
						</Link>
					</li>
					<li>
						<Link className="flex items-center justify-center" href="search">
							<Search color={pathname === "/search" ? "black" : "gray"} />
						</Link>
					</li>
					<li>
						<Link className="flex items-center justify-center" href="create">
							<SquarePlus color={pathname === "/create" ? "black" : "gray"} />
						</Link>
					</li>
				</ul>
				<button className="btn btn-ghost">
					<Link href="/login">Sign in</Link>
				</button>
			</div>
		</nav>
	);
}
