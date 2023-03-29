<script lang="ts">
	export let href: string;
</script>

<a {href}>
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
