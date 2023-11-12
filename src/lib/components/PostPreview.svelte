<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import PostIcon from '$lib/icons/Post.svelte';

	export let post: Post;

	const targetUrl: string = '/notes/' + post.slug;
</script>

<li>
	<article>
		<small>
			<time datetime={post.created.substring(0, 10)}>
				{formatDate(post.created)}
			</time>
		</small>

		<h2>
			<a href={targetUrl} data-sveltekit-preload-code>
				{post.title}
			</a>
		</h2>

		<p>
			{post.summary}
		</p>

		<div>
			<a href={targetUrl} data-sveltekit-preload-code>
				<PostIcon />
				Read more
			</a>
			<time datetime={`PT${post.readingTime.minutes}M`}>
				({post.readingTime.text})
			</time>
		</div>
	</article>
</li>

<style lang="scss">
	li {
		list-style: none;

		&:not(&:first-of-type) {
			margin-top: 2rem;

			@include for(tablet-and-up) {
				margin-top: 4rem;
			}
		}

		small {
			display: block;
		}

		h2 {
			margin-top: 0;
		}

		div {
			display: flex;
			font-size: 0.875rem;
			gap: 0.25rem;

			a {
				align-items: center;
				display: inline-flex;
				gap: 0.25rem;

				:global(svg) {
					height: 1rem;
					width: auto;
				}
			}

			time {
				color: var(--color--page-text-small);
			}
		}
	}
</style>
