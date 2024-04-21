import { cookies } from "next/headers";

import NavBar from "./nav-bar";

export default function Header() {
	const cookie = cookies().get("session")?.value;

	console.log(cookie);

	return (
		<header className="sticky top-0 bg-white z-10 border-b">
			<NavBar />
		</header>
	);
}
