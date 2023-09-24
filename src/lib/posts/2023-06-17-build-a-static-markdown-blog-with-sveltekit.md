---
title: Build a static Markdown blog with SvelteKit
created: 2023-09-24
updated:
summary: I recently did a makeover of my personal website and kicked off this blog. This post is about the process of creating this site and a few interesting things I learned while putting it together.
draft: false
---

When I graduated from [Hamburg Coding School](https://hamburgcodingschool.com/en/) in April 2021 and built my first website, I had zero professional experience as a software developer and no private projects I could show off. Regardless of that (or rather because of that) it was vital for me to have an appealing website to demonstrate what I was capable of and to increase my chances of landing my first developer job.

With simple means (no frameworks, just pure HTML/CSS and Vanilla JavaScript) and lots of verve, I created a simple yet fancy portfolio website that appropriately reflected me and my skills. However, two years into being a developer, I felt that I had outgrown my website and wanted to evolve it.

## Where to begin

Like probably most developers, I didn't spend too much time thinking about what I wanted to build, but what tools I wanted to use. Since there won't be any significant interaction on the site and a blog is naturally very content-focused, I got on the hype train and opted for a static generated site.

Nevertheless, I wanted to use a UI framework to throw in a bit of reactivity here & there and to be able to organize the project into components. I picked Svelte as the foundation for this because I was sold on both the templating syntax and the compiler-based approach. The tech stack was eventually decided between Svelte's own SSG solution [SvelteKit](https://kit.svelte.dev/) and the [Astro integration for Svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/). Thanks again to the one person who participated in [my Mastodon poll](https://mas.to/@hendrik/109824127896187087) and brought SvelteKit a landslide.

## Get things rolling

There are some great resources that cover in detail how to create a static Markdown blog from scratch using SvelteKit. Kudos to [Josh Collinsworth](https://hachyderm.io/@collinsworth) and [Matt Fantinel](https://hachyderm.io/@fantinel), whose articles really helped me get to grips with Svelte and to understand how to build a SvelteKit project.

- [Let's learn SvelteKit by building a static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) _by Josh Collinsworth_
- [How I built a blog with Svelte and SvelteKit](https://fantinel.dev/blog-development-sveltekit) _by Matt Fantinel_

Josh also provides a fantastic [SvelteKit static blog starter](https://github.com/josh-collinsworth/sveltekit-blog-starter) that makes it very easy to get started. For that reason, I am not going to go into the details of setting up a blog with SvelteKit from scratch here, but instead will share what excited me the most, which features I found best, and which nuts have been the hardest to crack.

### Preload most important pages

In SSG, the HTML is generated on the server and sent to the browser on request. This allows users to see the page faster than with client-side rendering, where they only see a blank page while waiting for the browser to compile JavaScript and render the page.

To improve the user experience even more, it can be useful to preload the most important pages when the home page is loaded. In my case, I want to preload the routes `/notes` and `/resume`.

SvelteKit provides the `preloadCode()` function for this purpose, which accepts a `string[]` argument and should be called in an `onMount` lifecycle function of the `+layout.svelte` component that applies to all routes. In the event the user enters on a different route, the start page can also be pre-loaded.

```svelte
<!-- src/routes/+layout.svelte -->
<script>
	import { onMount } from 'svelte';
	import { preloadCode } from '$app/navigation';

	onMount(() => {
		preloadCode(['/notes', '/resume', '/']);
	});
</script>
```

Calling `preloadCode()` without arguments will preload the code for **all** routes. Be aware that this will likely increase the initial loading time of the page! The preferable solution here is to preload less heavily visited pages just before they are presumed to be visited. What sounds complicated can be easily implemented in SvelteKit using the `data-sveltekit-preload-data` attribute:

> When an `<a>` element has a `data-sveltekit-preload-data` attribute, SvelteKit will begin the navigation as soon as the user hovers over the link (on desktop) or taps it (on mobile).

The most straightforward way to implement this is to throw the attribute on the `<body>` element.

```html
<!-- src/app.html -->
<body data-sveltekit-preload-data="hover">
	%sveltekit.body%
</body>
```

### Create sitemap with postbuild script

A sitemap is a great thing to have! For a blog in particular, where new pages are added on a regular basis, it makes sense to regenerate the sitemap with each build. The npm package [svelte-sitemap](https://www.npmjs.com/package/svelte-sitemap) by [Lukas Bartak](https://twitter.com/lukasbartak) thankfully does exactly that for Svelte based projects:

> It scans your routes in `build/` folder and generates `build/sitemap.xml` file.

Utilizing this only takes a `postbuild` hook in the `package.json`.

```json
{
	"scripts": {
		"build": "vite build",
		"postbuild": "npm run sitemap",
		"sitemap": "svelte-sitemap --domain https://yourdomain.com"
	}
}
```

Note that if the project is to be built using Sveltekit's [adapter-static](https://kit.svelte.dev/docs/adapter-static) and then deployed to Vercel, `.vercel/output/static` must be specified as output directory (since Vercel does not create a `build/` folder). To deal with this, I created dedicated `:vercel` scripts that are called when a production build is run on Vercel.

```json
{
	"scripts": {
		"build:vercel": "vite build",
		"postbuild:vercel": "npm run sitemap:vercel",
		"sitemap:vercel": "svelte-sitemap --out-dir .vercel/output/static --domain https://yourdomain.com"
	}
}
```

### RSS feed implementation

Svelte's server routes do not need to return JSON but can also render an XML file generated at build time. This makes providing an RSS feed a breeze!

To make the RSS feed available at the https://yourdomain.com/rss.xml, create an `rss.xml` folder with a `+server.js` file in the `src/routes` folder and throw in a `GET` handler. Grab the Markdown files of your blog posts, generate the XML file content from the posts metadata using a render function and return an `Response` object.

```ts
// src/routes/rss.xml/+server.js
export const prerender = true;

export const GET = async () => {
	const markdownFiles = import.meta.glob('/src/lib/posts/*md', {
		eager: true
	});

	const posts = [];

	for (const path in markdownFiles) {
		const post = markdownFiles[path] as any;
		if (post) {
			posts.push({
				slug: path.split('/').pop()?.slice(0, -3),
				...post.metadata
			});
		}
	}

	posts.sort(
		(a, b) => Number(new Date(b.created)) - Number(new Date(a.created))
	);

	const body = render(posts);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return new Response(body, {
		status: 200,
		headers
	});
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Your Title</title>
<description>Your Description</description>
<link>https://yourdomain.com</link>
<atom:link href="https://yourdomain.com/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
    <guid isPermaLink="true">https://yourdomain.com/notes/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://yourdomain.com/notes/${post.slug}</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.created).toUTCString()}</pubDate>
    </item>`
	)
	.join('')}
</channel>
</rss>`;
```

Since this also has to happen for the list view, it is recommended to extract the retrieval of the blog posts to a helper function. The line `export const prerender = true` at the beginning is vital so that the RSS feed is being precomputed at build time.

```ts
// src/lib/utils/getPosts.js
const getPosts = () => {
	const markdownFiles = import.meta.glob('/src/lib/posts/*md', {
		eager: true
	});

	const posts = [];

	for (const path in markdownFiles) {
		const post = markdownFiles[path] as any;
		if (post) {
			posts.push({
				slug: path.split('/').pop()?.slice(0, -3),
				...post.metadata
			});
		}
	}

	return posts.sort(
		(a, b) => Number(new Date(b.created)) - Number(new Date(a.created))
	);
};

export default getPosts;
```

```ts
// src/routes/rss.xml/+server.js
import { getPosts } from '$lib/utils';

export const prerender = true;

export const GET = async () => {
	const posts = getPosts();

	const body = render(posts);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return new Response(body, {
		status: 200,
		headers
	});
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Your Title</title>
<description>Your Description</description>
<link>https://yourdomain.com</link>
<atom:link href="https://yourdomain.com/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
    <guid isPermaLink="true">https://yourdomain.com/notes/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://yourdomain.com/notes/${post.slug}</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.created).toUTCString()}</pubDate>
    </item>`
	)
	.join('')}
</channel>
</rss>`;
```

## Roundup

Even though we only touched some parts in this article, I gotta say that the whole thing worked out very well. From my point of view, SvelteKit provides a top-notch developer experience as a static site generator while making it dead easy to add some nifty SPA-like features (e.g. client-side routing).

I ended up with a snappy zero-runtime-dependency website with a Google Lighthouse score of 100% and a bundle size of currently less than 450 kB, which I am perfectly very happy with.

Hopefully you also got something valuable out of this article, even if it's just a glimpse into the wide range of SvelteKit's capabilities. Who knows, you might implement your next project in SvelteKit!
