<script lang="ts">
	const scrollThreshold = 82;
	let isHeaderInView: boolean;
	let progress: number;

	const parseScroll = (): void => {
		isHeaderInView = window.scrollY < scrollThreshold;
	};

	const updateProgress = (): void => {
		let scroll = document.documentElement.scrollTop;
		let height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		progress = +((scroll / height) * 100).toFixed(2);
	};
</script>

<svelte:window
	on:load={updateProgress}
	on:scroll={parseScroll}
	on:scroll={updateProgress}
/>

<div style:width={progress + '%'}>
	{#if !isHeaderInView}
		<div style:width={100 - progress + '%'} />
	{/if}
</div>

<style lang="scss">
	@include for(tablet-and-up) {
		div {
			@include no-print();
			background-color: var(--color--page-accent);
			height: 0.375rem;
			inset: 0 auto auto 0;
			position: fixed;
			z-index: 2;

			> div {
				background-color: var(--color--header-background);
				content: '';
				inset: 0 0 auto auto;
				position: inherit;
			}
		}
	}
</style>
