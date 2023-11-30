<script lang="ts">
	import ChevronUp from '$lib/icons/ChevronUp.svelte';

	let hidden = true;
	let showOnPx = 360;

	const scrollToTop = (): void => {
		window.scroll({ top: 0, behavior: 'smooth' });
	};

	const scrollContainer = (): HTMLElement =>
		document.documentElement || document.body;

	const scrollHandler = () => {
		if (!scrollContainer()) return;

		hidden = scrollContainer().scrollTop > showOnPx ? false : true;
	};
</script>

<svelte:window on:scroll={scrollHandler} />

<button on:click={scrollToTop} class:hidden>
	<ChevronUp />
</button>

<style lang="scss">
	button {
		@include no-print();
		:global(svg) {
			height: 2.5em;
			width: auto;
		}

		all: unset;
		color: var(--color--page-accent);
		inset: auto 1.5rem 1.5rem auto;
		opacity: 1;
		position: fixed;
		transition: all 0.4s ease-in-out;
		user-select: none;
		z-index: 2;

		@include for(tablet-and-up) {
			inset: auto 2.5rem 2.5rem auto;
		}

		&.hidden {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
