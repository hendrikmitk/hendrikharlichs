import type { ReadingTime } from '$lib/types/post.js';
import trimFrontMatter from '$lib/utils/trimFrontMatter.js';

import markdownToTxt from 'markdown-to-txt';
import { readingTime } from 'reading-time-estimator';

export async function load({ params }) {
	const post = await import(`../../../lib/posts/${params.slug}.md`);
	const postRaw = await import(`../../../lib/posts/${params.slug}.md?raw`);
	const content = post.default;

	const plaintextTrimmed: string = markdownToTxt(
		trimFrontMatter(postRaw.default)
	);

	const estimatedReadingTime: ReadingTime = readingTime(plaintextTrimmed, 238);

	const { created, summary, title, updated } = post.metadata;

	return { content, created, estimatedReadingTime, summary, title, updated };
}
