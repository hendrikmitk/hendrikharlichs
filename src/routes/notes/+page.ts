import { getPosts } from '$lib/utils';

export const load = () => {
	const posts = getPosts();

	return {
		posts
	};
};
