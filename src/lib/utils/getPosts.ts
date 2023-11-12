import type { Post } from '$lib/types';

import { readingTime as readingTimeEstimator } from 'reading-time-estimator';
import striptags from 'striptags';

const getPosts = (): Post[] => {
	const markdownFiles = import.meta.glob('/src/lib/posts/*md', {
		eager: true
	});

	const allPosts: Post[] = [];

	for (const fullPath in markdownFiles) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const file = markdownFiles[fullPath] as any;

		if (!file) continue;

		const metadata = file.metadata as Omit<Post, 'slug' | 'readingTime'>;
		const strippedHtml: string = striptags(file.default.render().html);

		const post = {
			...metadata,
			readingTime: readingTimeEstimator(strippedHtml, 238),
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
