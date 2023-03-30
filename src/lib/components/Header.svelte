<script>
	import { navItems } from '$config';
	import { isMenuOpen } from '$store';
	import { closeMenuIfOpen } from '$utils';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import HeaderLink from './HeaderLink.svelte';
	import HeaderLogo from './HeaderLogo.svelte';

	const handleWindowResize = () => {
		if ($isMenuOpen && window.innerWidth > 688) {
			isMenuOpen.set(false);
		}
	};
</script>

<svelte:window on:resize={handleWindowResize} />

<header class:expanded={$isMenuOpen}>
	<nav>
		<a href="/" on:click={closeMenuIfOpen} title="Logo">
			<HeaderLogo />
		</a>
		<ul class:open={$isMenuOpen}>
			{#each navItems as navItem}
				<HeaderLink href={navItem.route}>
					{navItem.title}
				</HeaderLink>
			{/each}
		</ul>
	</nav>
	<Hamburger />
</header>

<style lang="scss">
	@import '$lib/scss/abstracts/mixins.scss';

	header {
		background-color: var(--color--header-background);

		@include for(phone-only) {
			padding: 1.25rem 0;

			&::after {
				background-color: var(--color--mobile-header-background);
				color: var(--color--mobile-header-text);
				content: '';
				clip-path: polygon(0 0, 100% 0, 100% 65%, 0 75%);
				inset: 0;
				position: absolute;
				transform: translateY(-100%);
				transition: all 0.4s ease-in-out;
			}

			&.expanded {
				&::after {
					transform: translateY(0);
				}
			}
		}

		@include for(tablet-and-up) {
			color: var(--color--header-text);
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
			}

			ul {
				display: none;

				&.open {
					align-items: center;
					display: flex;
					flex-direction: column;
					gap: 2.5rem;
					inset: 0;
					margin-top: 10rem;
					position: absolute;
					z-index: 1;
				}

				@include for(tablet-and-up) {
					align-items: center;
					display: flex;
					flex-direction: row;
					gap: 2rem;
				}
			}
		}
	}
</style>
