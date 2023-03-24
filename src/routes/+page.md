<script>
	import { siteTitle } from '$config';
	import { description } from '$data';
</script>

<svelte:head>

<title>Home | { siteTitle }</title>
<meta data-key="description" name="description" content={description} />
<meta property="og:type" content="article" />
<meta property="og:title" content="Home" />
<meta property="og:description" content={description} />
<meta name="twitter:title" content="Home" />
<meta name="twitter:description" content={description} />
</svelte:head>

# Home

This is an example _markdown_ in page content!

- We
- **Can**
- ~~Have~~
- Lists _too!_

Find and edit this page here:

```
src/routes/+page.md
```
