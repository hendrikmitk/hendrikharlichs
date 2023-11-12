import { getPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = () => {
	const posts = getPosts();
	return json(posts);
};
