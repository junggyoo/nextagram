import { Rule } from "sanity";

const post = {
	title: "Post",
	name: "post",
	type: "document",
	fields: [
		{
			title: "Author",
			name: "author",
			type: "reference",
			to: [{ type: "user" }],
		},
		{
			title: "Photo",
			name: "photo",
			type: "image",
		},
		{
			title: "Likes",
			name: "likes",
			type: "array",
			of: [{ type: "reference", to: [{ type: "user" }] }],
			validation: (Rule: Rule) => Rule.unique(),
		},
		{
			title: "Comments",
			name: "comments",
			type: "array",
			of: [
				{
					title: "Comment",
					name: "comment",
					type: "document",
					fields: [
						{
							title: "Author",
							name: "author",
							type: "reference",
							to: [{ type: "user" }],
						},
						{
							title: "Comment",
							name: "comment",
							type: "string",
						},
					],
				},
			],
		},
	],
	preview: {
		select: {
			title: "comments.0.comment",
			authorName: "author.name",
			autorUsername: "author.username",
			media: "photo",
		},
		prepare(selection: any) {
			const { title, authorName, autorUsername, media } = selection;

			return {
				title: title || "No title",
				subtitle: `By ${authorName} (@${autorUsername})`,
				media: media || "No photo",
			};
		},
	},
};

export default post;
