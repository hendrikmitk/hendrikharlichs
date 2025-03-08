export async function load({ params }) {
	const post = await import(`../../../../lib/posts/${params.slug}.md`);
	const content = post.default;

	const { created, summary, keywords, title, updated } = post.metadata;

	return {
		content,
		created,
		slug: params.slug,
		summary,
		keywords,
		title,
		updated
	};
}
