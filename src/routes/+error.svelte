<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

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

<Header />

<main>
	<h1>Page Not Found</h1>
	<p>Sorry, the page you are looking for does not exist.</p>
	<p>Go back to the <a href="/">home page</a> instead.</p>
</main>

<Footer />

<style lang="scss">
	main {
		margin: 2rem 1rem;

		@include for(tablet-and-up) {
			margin: 4rem auto 2rem;
			width: 100%;
			max-width: 46rem;
		}
	}
</style>
