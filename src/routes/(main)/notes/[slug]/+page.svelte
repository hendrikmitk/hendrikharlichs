<script lang="ts">
	import { siteTitle } from '$lib/config';
	import { formatDate } from '$lib/utils';

	export let data;

	const { content, created, slug, summary, title, updated } = data;
</script>

<svelte:head>
	<title>{title} | {siteTitle}</title>
	<meta data-key="description" name="description" content={summary} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{title} | {siteTitle}" />
	<meta property="og:description" content={summary} />
	<meta
		property="og:image"
		content={`https://hendrikharlichs.de/${slug}.png`}
	/>
	<meta name="twitter:title" content="{title} | {siteTitle}" />
	<meta name="twitter:description" content={summary} />
	<meta
		name="twitter:image"
		content={`https://hendrikharlichs.de/${slug}.png`}
	/>
</svelte:head>

<article>
	<h1>{title}</h1>

	<div>
		<small>
			<b>Published:</b>
			<time datetime={created.substring(0, 10)}>{formatDate(created)}</time>
		</small>
		{#if updated}
			<small>
				<b>Updated:</b>
				<time datetime={updated.substring(0, 10)}>{formatDate(updated)}</time>
			</small>
		{/if}
	</div>

	<svelte:component this={content} />
</article>

<style lang="scss">
	h1 {
		margin-bottom: 0.5rem;

		@include for(tablet-and-up) {
			margin-bottom: 1rem;
		}
	}

	div {
		display: inline-block;
		margin-bottom: 0.5rem;
		padding-top: 0.75rem;
		position: relative;
		z-index: -1;

		@include for(tablet-and-up) {
			margin-bottom: 1rem;
			padding-top: 1.25rem;
		}

		@media print {
			padding-top: 0.75rem;
		}

		&::before {
			@include no-print();
			background-color: var(--color--page-accent);
			content: '';
			height: 0.125rem;
			left: 0;
			position: absolute;
			right: 0;
			top: 0;
		}

		small {
			display: block;
		}
	}
</style>
