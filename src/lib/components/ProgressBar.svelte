<script lang="ts">
	const scrollThreshold = 82;
	let isHeaderInView: boolean;
	let scrollProgress: number;

	const parseScroll = (): void => {
		isHeaderInView = window.scrollY < scrollThreshold;
	};

	const updatescrollProgress = (): void => {
		let scroll = document.documentElement.scrollTop;
		let height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		scrollProgress = +((scroll / height) * 100).toFixed(2);
	};
</script>

<svelte:window
	on:load={updatescrollProgress}
	on:scroll={parseScroll}
	on:scroll={updatescrollProgress}
/>

<div style:width={scrollProgress + '%'}>
	{#if !isHeaderInView}
		<div style:width={100 - scrollProgress + '%'} />
	{/if}
</div>

<style lang="scss">
	@include for(tablet-and-up) {
		div {
			background-color: var(--color--page-accent);
			height: 0.375rem;
			inset: 0 auto auto 0;
			position: fixed;

			> div {
				background-color: var(--color--header-background);
				content: '';
				inset: 0 0 auto auto;
				position: inherit;
			}
		}
	}
</style>
