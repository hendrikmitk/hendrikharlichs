<script lang="ts">
	import { currentPage } from '$store';
	import { closeMenuIfOpen } from '$utils';

	export let href: string;

	$: isCurrentPage = href === $currentPage;
	$: isBlogPost = href === '/blog' && $currentPage.startsWith(href + '/');
</script>

<li>
	<a {href} on:click={closeMenuIfOpen} class:active={isCurrentPage || isBlogPost}>
		<slot />
	</a>
</li>

<style lang="scss">
	@import '$lib/assets/scss/mixins.scss';

	li {
		list-style: none;

		@include for(phone-only) {
			animation: fade_slide_scale 0.3s ease forwards;
			opacity: 0;

			@for $i from 1 through 5 {
				&:nth-of-type(#{$i}) {
					animation-delay: 0.15s + $i * 0.05ms;
				}
			}
		}

		a {
			color: inherit;
			font-family: var(--font--title);
			font-size: 2.2rem;
			font-weight: bold;
			line-height: 1.1;
			text-decoration: none;

			@include for(tablet-and-up) {
				display: block;
				font-family: var(--font--default);
				font-size: 1.2rem;
				font-weight: 400;
				position: relative;

				&:hover {
					color: var(--color--header-accent);
				}

				&::after {
					background-color: var(--color--header-accent);
					bottom: -0.4rem;
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
	}
</style>
