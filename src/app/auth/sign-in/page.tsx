"use client";

import { signIn } from "next-auth/react";

import ColorButton from "@/components/ui/buttons/ColorButton";

import { getPrevPageUrl } from "@/utils";

export default function SignInPage() {
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
