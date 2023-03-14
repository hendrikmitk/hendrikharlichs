<script lang="ts">
	import { currentPage } from '$store';

	export let href: string;

	$: isCurrentPage = href === $currentPage;
</script>

<li>
	<a {href} class:active={isCurrentPage}>
		<slot />
	</a>
</li>

<style lang="scss">
	@import '$lib/scss/mixins.scss';

	li {
		list-style: none;

		a {
			color: inherit;
			display: block;
			font-size: 20px;
			position: relative;
			text-decoration: none;

			&:hover {
				color: var(--color--header-accent);
			}

			&::after {
				background-color: var(--color--header-accent);
				bottom: -0.175rem;
				content: '';
				height: 0.1rem;
				left: 0;
				position: absolute;
				right: 0;
				transform: scaleX(0);
				transition: all 180ms ease-in-out 20ms;
				visibility: hidden;
				width: 100%;
			}

			&.active {
				&::after {
					transform: scaleX(1);
					visibility: visible;
				}
			}
		}
	}
</style>
