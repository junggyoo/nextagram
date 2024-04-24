"use client";

import { signIn } from "next-auth/react";
import ColorButton from "@/components/ui/buttons/ColorButton";

export default function SignInPage() {
	const getPrevPageUrl = () => {
		const prevPageUrl = sessionStorage.getItem("prevPageUrl");

		if (!prevPageUrl) {
			return "/";
		}

		return prevPageUrl;
	};

	return (
		<section className="flex justify-center items-center h-screen">
			<ColorButton
				className="w-[300px] h-[50px]"
				onClick={() => signIn("google", { callbackUrl: getPrevPageUrl() })}
			>
				Sign In with Google
			</ColorButton>
		</section>
	);
}
