import { Rule } from "sanity";

const user = {
	title: "User",
	name: "user",
	type: "document",
	fields: [
		{
			title: "UserName",
			name: "username",
			type: "string",
		},
		{
			title: "Name",
			name: "name",
			type: "string",
		},
		{
			title: "Email",
			name: "email",
			type: "string",
		},
		{
			title: "Image",
			name: "image",
			type: "string",
		},
		{
			title: "Following",
			name: "following",
			type: "array",
			of: [{ type: "reference", to: [{ type: "user" }] }],
			validation: (Rule: Rule) => Rule.unique(),
		},
		{
			title: "Followers",
			name: "followers",
			type: "array",
			of: [{ type: "reference", to: [{ type: "user" }] }],
			validation: (Rule: Rule) => Rule.unique(),
		},
		{
			title: "BookMarks",
			name: "bookmarks",
			type: "array",
			of: [{ type: "reference", to: [{ type: "post" }] }],
			validation: (Rule: Rule) => Rule.unique(),
		},
	],
	preview: {
		select: {
			title: "name",
			subtitle: "username",
		},
	},
};

export default user;
