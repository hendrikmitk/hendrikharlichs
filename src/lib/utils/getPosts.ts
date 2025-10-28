import type { Post } from '$lib/types';

import { readingTime as readingTimeEstimator } from 'reading-time-estimator';

const getPosts = (): Post[] => {
	const markdownFiles = import.meta.glob('/src/lib/posts/*md', {
		eager: true,
		query: '?raw',
		import: 'default'
	});

	const allPostsMetadata = import.meta.glob('/src/lib/posts/*md', {
		eager: true
	});

	const allPosts: Post[] = [];

	for (const fullPath in allPostsMetadata) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const file = allPostsMetadata[fullPath] as any;

		if (!file) continue;

		const metadata = file.metadata as Omit<Post, 'slug' | 'readingTime'>;

		// Get the raw markdown content for reading time estimation
		const rawContent = markdownFiles[fullPath] as string;
		// Remove frontmatter (everything between --- markers)
		const contentWithoutFrontmatter = rawContent.replace(/^---[\s\S]*?---/, '');

		const post = {
			...metadata,
			readingTime: readingTimeEstimator(contentWithoutFrontmatter, 238),
			slug: fullPath.split('/').pop()?.slice(0, -3) || ''
		} satisfies Post;

		allPosts.push(post);
	}

	const posts: Post[] = allPosts.filter((post) => !post.draft);

	posts.sort(
		(first, second) =>
			Number(new Date(second.created)) - Number(new Date(first.created))
	);

	return posts;
};

export default getPosts;
