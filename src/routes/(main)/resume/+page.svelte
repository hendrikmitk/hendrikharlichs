<script lang="ts">
	import { siteTitle } from '$lib/config';
	import { description } from '$lib/data';
	import type { Employer } from '$lib/types';
	import JobItem from '$lib/components/JobItem.svelte';

	export let data;

	const jobs: Employer[] = data.jobs;
</script>

<svelte:head>
	<title>Resume | {siteTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Resume | {siteTitle}" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://hendrikharlichs.de/share.png" />
	<meta name="twitter:title" content="Resume | {siteTitle}" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://hendrikharlichs.de/share.png" />
</svelte:head>

<article>
	<h1>Experience</h1>

	<ul>
		{#each jobs as job}
			<JobItem {job} />
		{/each}
	</ul>
</article>
