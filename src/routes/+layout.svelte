<script>
	import '$lib/scss/global.scss';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	@import '$lib/scss/mixins.scss';

	main {
		margin: 2rem 1rem;

		@include for(tablet-and-up) {
			margin: 4rem auto;
			width: 100%;
			max-width: 46rem;
		}
	}
</style>
