<script>
	import { navItems } from '$lib/config';
	import { isMenuOpen } from '$lib/store';
	import { closeMenuIfOpen, removeScrollLock } from '$lib/utils';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import HeaderLink from '$lib/components/HeaderLink.svelte';
	import HeaderLogo from '$lib/components/HeaderLogo.svelte';

	const handleWindowResize = () => {
		if ($isMenuOpen && window.innerWidth > 688) {
			isMenuOpen.set(false);
			removeScrollLock();
		}
	};

	const handleLinkClick = () => {
		closeMenuIfOpen();
		removeScrollLock();
	};
</script>

<svelte:window on:resize={handleWindowResize} />

<header class:expanded={$isMenuOpen}>
	<nav>
		<a href="/" on:click={handleLinkClick} title="Logo">
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
	header {
		@include no-print();
		background-color: var(--color--header-background);

		@include for(phone-only) {
			padding: 1.25rem 0;

			&::before,
			&::after {
				content: '';
				inset: 0;
				transition: all 0.4s ease-in-out;
				z-index: 1;
			}

			&::before {
				background-color: var(--color--mobile-header-background-top);
				color: var(--color--mobile-header-text);
				clip-path: polygon(0 0, 100% 0, 100% 65%, 0 75%);
				position: fixed;
				transform: translateY(-100%);
			}

			&::after {
				background-color: var(--color--mobile-header-background-bottom);
				clip-path: polygon(0 75%, 100% 65%, 100% 100%, 0% 100%);
				position: fixed;
				transform: translateY(100%);
			}

			&.expanded {
				&::before,
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
					z-index: 2;
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
