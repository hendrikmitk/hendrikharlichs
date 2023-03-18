<script>
	import { currentPage } from '$store';
	import Header from '$lib/components/Header.svelte';

	import '$lib/assets/scss/global.scss';

	export let data;

	$: currentPage.set(data.path);
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss">
	@import '$lib/assets/scss/mixins.scss';

	main {
		margin: 2rem 1rem;

		@include for(tablet-and-up) {
			margin: 4rem auto;
			width: 100%;
			max-width: 46rem;
		}
	}
</style>
