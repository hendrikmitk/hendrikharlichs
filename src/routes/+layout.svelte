<script>
	import { currentPage } from '$lib/store';
	import { navItems } from '$lib/config';
	import { printConsoleMessage } from '$lib/utils';

	import '$lib/scss/global.scss';

	import { onMount } from 'svelte';
	import { preloadCode } from '$app/navigation';

	export let data;

	$: currentPage.set(data.path);

	onMount(() => {
		preloadCode(...navItems.map((item) => item.route), '/');
		printConsoleMessage();
	});
</script>

<slot />
