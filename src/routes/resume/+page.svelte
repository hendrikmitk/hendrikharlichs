<script lang="ts">
	import { siteTitle } from '$config';
	import { description } from '$data';
	import type { Employer } from '$types';
	import JobItem from '$lib/components/JobItem.svelte';

	export let data;

	const jobs: Employer[] = data.jobs;
</script>

<svelte:head>
	<title>Resume | {siteTitle}</title>
	<meta data-key="description" name="description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Resume" />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content="Resume" />
	<meta name="twitter:description" content={description} />
</svelte:head>

<article>
	<h1>Experience</h1>

	<ul>
		{#each jobs as job}
			<JobItem {job} />
		{/each}
	</ul>
</article>
