<script>
	import { currentPage } from '$lib/store';
	import { navItems } from '$lib/config';
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

	onMount(() => {
		preloadCode(...navItems.map((item) => item.route), '/');
		printConsoleMessage();
	});
</script>

<slot />
