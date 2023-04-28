<script lang="ts">
	export let href: string;
	export let rel: string;
</script>

<a {href} target="_blank" {rel}>
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
