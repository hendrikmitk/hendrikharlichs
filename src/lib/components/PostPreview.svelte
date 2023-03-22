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

		<h2 class="title">
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
			color: var(--color--page-text-light);
			display: block;
			text-transform: uppercase;
		}

		.title {
			margin-top: 0;

			a {
				color: inherit;
				text-decoration: none;
				text-transform: unset;

				&:hover {
					color: var(--color--page-accent);
				}
			}
		}

		a {
			color: var(--color--page-text-light);
			text-decoration: underline currentcolor 1px;
			text-transform: uppercase;
			text-underline-offset: 0.2rem;

			&:hover {
				color: var(--color--page-text);
			}
		}
	}
</style>
