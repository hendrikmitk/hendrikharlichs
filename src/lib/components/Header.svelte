<script>
	import { navItems } from '$config';
	import HeaderLink from './HeaderLink.svelte';
	import HeaderLogo from './HeaderLogo.svelte';
</script>

<header>
	<nav>
		<HeaderLogo href="/" />
		<ul>
			{#each navItems as navItem}
				<HeaderLink href={navItem.route}>
					{navItem.title}
				</HeaderLink>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/mixins.scss';

	header {
		background-color: var(--color--header-background);
		color: var(--color--header-text);
		padding: 0.75rem 0;

		@include for(tablet-and-up) {
			padding: 1rem 0;
		}

		nav {
			align-items: center;
			display: flex;
			justify-content: space-between;
			margin: 0 1rem;

			@include for(tablet-and-up) {
				margin: 0 auto;
				max-width: 46rem;
				width: 100%;
			}

			ul {
				align-items: center;
				display: flex;
				gap: 2rem;
				margin: 0;
				padding: 0;
			}
		}
	}
</style>
