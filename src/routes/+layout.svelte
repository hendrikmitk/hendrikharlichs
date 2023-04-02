<script>
	import { currentPage } from '$store';
	import { navItems } from '$config';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '$lib/scss/global.scss';

	import { onMount } from 'svelte';
	import { preloadCode } from '$app/navigation';

	export let data;

	$: currentPage.set(data.path);

	onMount(() => {
		preloadCode(...navItems.map((item) => item.route), '/imprint');
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
			margin: 4rem auto;
			width: 100%;
			max-width: 46rem;
		}
	}
</style>
