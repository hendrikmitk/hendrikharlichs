export async function load({ params }) {
	const post = await import(`../../../../lib/posts/${params.slug}.md`);
	const content = post.default;

	const { created, summary, title, updated } = post.metadata;

	return { content, created, summary, title, updated };
}
