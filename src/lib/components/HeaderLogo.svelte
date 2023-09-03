<script>
	import { isMenuOpen } from '$lib/store';
</script>

<svg
	fill="currentColor"
	class:inverted={$isMenuOpen}
	viewBox="0 0 108 128"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M85 77h23v51H85zm0-77h23v51H85zM0 0h23v128H0z" />
</svg>

<style lang="scss">
	svg {
		color: var(--color--header-accent);

		height: 24px;
		width: auto;

		transition: all 0.4s ease-in-out;

		&.inverted {
			color: var(--color--mobile-header-text);
			position: relative;
			z-index: 1;
		}

		@include for(tablet-and-up) {
			height: 32px;
		}
	}
</style>
