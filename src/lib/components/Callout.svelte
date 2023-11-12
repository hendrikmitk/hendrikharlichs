<script lang="ts">
	import Error from '$lib/icons/Error.svelte';
	import Info from '$lib/icons/Info.svelte';
	import Warning from '$lib/icons/Warning.svelte';

	export let type: 'error' | 'info' | 'warning' = 'info';
</script>

<div class={type}>
	<span class="icon">
		{#if type === 'error'}
			<Error />
		{:else if type === 'warning'}
			<Warning />
		{:else}
			<Info />
		{/if}
	</span>
	<p>
		<slot />
	</p>
</div>

<style lang="scss">
	div {
		--color: var(--color--page-accent);

		--bright: color-mix(in srgb, var(--color) 25%, transparent);
		--softened: color-mix(in srgb, var(--color) 31.25%, transparent);
		--vivid: var(--color);

		background: var(--bright);
		border-bottom-right-radius: 4px;
		border-left: 0.25rem solid var(--vivid);
		border-top-right-radius: 4px;
		margin: 0.5rem 0;
		overflow: clip;
		padding: 0.125rem 2rem 0.125rem 0.75rem;
		position: relative;

		@include for(tablet-and-up) {
			margin: 0.75rem 0;
			padding: 0.5rem 3.75rem 0.5rem 1.5rem;
		}

		.icon {
			:global(svg) {
				height: 3rem;
				width: auto;

				@include for(tablet-and-up) {
					height: 4rem;
				}
			}

			color: var(--softened);
			position: absolute;
			right: -0.625rem;
			top: -0.625rem;

			@include for(tablet-and-up) {
				right: -0.75rem;
				top: -0.75rem;
			}
		}

		&.error {
			--color: var(--color--error);
		}

		&.warning {
			--color: var(--color--warning);
		}
	}
</style>
