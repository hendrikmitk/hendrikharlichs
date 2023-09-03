<script>
	import { currentPage } from '$lib/store';
	import { navItems } from '$lib/config';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '$lib/scss/global.scss';

	import { onMount } from 'svelte';
	import { preloadCode } from '$app/navigation';

	export let data;

	$: currentPage.set(data.path);

	onMount(() => {
		preloadCode(...navItems.map((item) => item.route));
	});
</script>

<Header />

<main>
	<slot />
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
