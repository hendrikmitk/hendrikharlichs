import type { Post } from '$types';

export const load = () => {
	const markdownFiles = import.meta.glob('/src/lib/posts/*md', {
		eager: true
	});

	const allPosts: Post[] = [];

	for (const path in markdownFiles) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const post = markdownFiles[path] as any;
		if (post) {
			allPosts.push({
				slug: path.split('/').pop()?.slice(0, -3),
				...post.metadata
			});
		}
	}

	const posts = allPosts.filter((post) => !post.draft);

	posts.sort(
		(a, b) => Number(new Date(b.created)) - Number(new Date(a.created))
	);

	return {
		posts
	};
};
