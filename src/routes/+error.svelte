<script>
	import Wireframe from '$lib/components/Wireframe.svelte';

	import { siteTitle } from '$lib/config';
	import { description } from '$lib/data';
</script>

<svelte:head>
	<title>Error | {siteTitle}</title>
	<meta data-key="description" name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Error | {siteTitle}" />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content="Error | {siteTitle}" />
	<meta name="twitter:description" content={description} />
</svelte:head>

<Wireframe>
	<h1>Page Not Found</h1>
	<p>Sorry, the page you are looking for does not exist.</p>
	<p>Go back to the <a href="/">home page</a> instead.</p>
</Wireframe>
