<script lang="ts">
	import type Post from '$lib/types/post';
	import { formatDate } from '$utils';

	export let post: Post;

	const targetUrl = '/blog/' + post.slug;
</script>

<li>
	<article>
		<small>
			{formatDate(post.created)}
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
		margin: 2rem 0;

		@include for(tablet-and-up) {
			margin: 4rem 0;
		}

		&:first-of-type {
			margin-top: 1rem;

			@include for(tablet-and-up) {
				margin-top: 2rem;
			}
		}

		&:last-of-type {
			margin-bottom: 1rem;

			@include for(tablet-and-up) {
				margin-bottom: 2rem;
			}
		}

		small {
			color: var(--color--page-text-small);
			display: block;
			text-transform: uppercase;
		}

		h2 {
			margin-top: 0;
			margin: 0 0 0.5rem;

			a {
				color: inherit;
				text-decoration: none;
				text-transform: unset;

				&:hover {
					color: var(--color--page-accent);
				}
			}
		}

		p {
			margin: 0.5rem 0 0.5rem;
		}

		a {
			color: var(--color--page-link-text);
			text-decoration: underline currentcolor 0.125rem;
			text-transform: uppercase;
			text-underline-offset: 0.25rem;

			&:hover {
				color: var(--color--page-link-hover);
			}
		}
	}
</style>
