<script lang="ts">
	import { siteTitle } from '$config';
	import { formatDate } from '$utils';

	export let data;

	const { content, created, summary, title, updated } = data;
</script>

<svelte:head>
	<title>{title} | {siteTitle}</title>
	<meta data-key="description" name="description" content={summary} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={summary} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={summary} />
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

		&::before {
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
