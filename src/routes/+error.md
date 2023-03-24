<script>
	import { siteTitle } from '$config';
	import { description } from '$data';
</script>

<svelte:head>

<title>Error | { siteTitle }</title>
<meta data-key="description" name="description" content={description} />
<meta property="og:type" content="article" />
<meta property="og:title" content="Error" />
<meta property="og:description" content={description} />
<meta name="twitter:title" content="Error" />
<meta name="twitter:description" content={description} />
</svelte:head>

# Error

Find and edit this page here:

```
src/routes/+error.md
```
