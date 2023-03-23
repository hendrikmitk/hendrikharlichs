import type { Post } from '$types';

export const load = () => {
	const markdownFiles = import.meta.glob('/src/lib/posts/*md', { eager: true });

	const posts: Post[] = [];

	for (const path in markdownFiles) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const post = markdownFiles[path] as any;
		if (post) {
			posts.push({
				slug: path.split('/').pop()?.slice(0, -3),
				...post.metadata
			});
		}
	}

	posts.sort((a, b) => Number(new Date(b.created)) - Number(new Date(a.created)));

	return {
		posts
	};
};
