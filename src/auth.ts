import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.OAUTH_GOOGLE_ID,
			clientSecret: process.env.OAUTH_GOOGLE_SECRET,
		}),
	],
	pages: {
		signIn: "/signin",
	},
});
