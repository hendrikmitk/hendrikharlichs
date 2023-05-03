<script>
	import { siteTitle } from '$config';
	import { description } from '$data';
</script>

<svelte:head>

<title>Error | { siteTitle }</title>
<meta data-key="description" name="description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:title" content="Error | { siteTitle }" />
<meta property="og:description" content={description} />
<meta name="twitter:title" content="Error | { siteTitle }" />
<meta name="twitter:description" content={description} />
</svelte:head>

# Page Not Found

Sorry, the page you are looking for does not exist.

Go back to the [home page](/) instead.
