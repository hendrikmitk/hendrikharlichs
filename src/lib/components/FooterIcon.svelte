<script lang="ts">
	export let href: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<slot />
</a>

<style lang="scss">
	a {
		:global(svg) {
			height: 1.5rem;
			width: auto;
		}
	}
</style>
