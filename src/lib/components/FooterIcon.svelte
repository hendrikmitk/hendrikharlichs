<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a {href} target="_blank" rel="external noopener noreferrer" {title}>
	<slot />
</a>

<style lang="scss">
	a {
		:global(svg) {
			height: 1.5rem;
			width: auto;
		}

		&[href^='http'] {
			&::after {
				all: unset;
			}
		}
	}
</style>
