<script lang="ts">
	const scrollThreshold = 82;
	let isHeaderInView: boolean;

	const parseScroll = (): void => {
		isHeaderInView = window.scrollY < scrollThreshold;
	};
</script>

<svelte:window on:scroll={parseScroll} />

<div class:tail={!isHeaderInView} />

<slot />

<style lang="scss">
	@include for(tablet-and-up) {
		@keyframes grow {
			to {
				width: 100%;
			}
		}

		@keyframes shrink {
			to {
				width: 0;
			}
		}

		div {
			animation: grow linear;
			animation-timeline: scroll(root);
			background-color: var(--color--page-accent);
			height: 0.25rem;
			inset: 0 auto auto 0;
			position: fixed;
			width: 0;

			&::after {
				animation: shrink linear;
				animation-timeline: scroll(root);
				background-color: transparent;
				content: '';
				height: 0.25rem;
				inset: 0 0 auto auto;
				position: inherit;
				width: 100%;
			}

			&.tail {
				&::after {
					background-color: var(--color--header-background);
				}
			}
		}
	}
</style>
