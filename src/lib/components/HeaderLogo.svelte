<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<img src="/logo.svg" alt="Logo" />
</a>

<style lang="scss">
	@import '$lib/scss/mixins.scss';

	img {
		height: 24px;
		width: 100%;

		@include for(tablet-and-up) {
			height: 32px;
		}
	}
</style>
