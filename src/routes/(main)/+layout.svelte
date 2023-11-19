<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '$lib/scss/global.scss';
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
