<script>
	import { currentPage } from '$lib/store';
	import { navItems, siteBaseUrl } from '$lib/config';
	import { printConsoleMessage } from '$lib/utils';

	import '$lib/scss/global.scss';

	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { preloadCode } from '$app/navigation';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	export let data;

	$: currentPage.set(data.path);
	$: canonicalUrl = new URL(data.path, siteBaseUrl).href;

	onMount(() => {
		navItems.forEach((item) => preloadCode(item.route));
		preloadCode('/');
		printConsoleMessage();
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<slot />
