<script lang="ts">
	import type { Post } from '$types';
	import { formatDate } from '$utils';

	export let post: Post;

	const targetUrl = '/blog/' + post.slug;
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

		<a href={targetUrl} data-sveltekit-preload-code> Read more </a>
	</article>
</li>

<style lang="scss">
	@import '$lib/assets/scss/mixins.scss';

	li {
		list-style: none;

		&:not(&:first-of-type) {
			margin-top: 1rem;

			@include for(tablet-and-up) {
				margin-top: 2rem;
			}
		}

		small {
			color: var(--color--page-text-small);
			display: block;
			font-size: 0.875rem;
			text-transform: uppercase;
		}

		h2 {
			margin: 0 0 0.5rem;
		}

		p {
			margin: 0.5rem 0 0.5rem;
		}

		a:not(h2 > a) {
			color: var(--color--page-link-text);
			font-size: 0.875rem;
			text-decoration: underline currentcolor 0.125rem;
			text-transform: uppercase;
			text-underline-offset: 0.25rem;

			&:hover {
				color: var(--color--page-link-hover);
			}
		}
	}
</style>
