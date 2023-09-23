import { siteTitle, siteBaseUrl } from '$lib/config';
import type { Post } from '$lib/types';
import { getPosts } from '$lib/utils';

export const GET = async () => {
	const posts = getPosts();

	const body: string = render(posts);
	const headers: Record<string, string> = {
		'Cache-Control': `max-age=0, s-maxage=3600`,
		'Content-Type': 'application/xml'
	};

	return new Response(body, {
		status: 200,
		headers
	});
};

const render = (
	posts: Post[]
): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteTitle}</description>
<link>${siteBaseUrl}</link>
<atom:link href="${siteBaseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
    <guid isPermaLink="true">${siteBaseUrl}/notes/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${siteBaseUrl}/notes/${post.slug}</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.created).toUTCString()}</pubDate>
    </item>`
	)
	.join('')}
</channel>
</rss>`;
