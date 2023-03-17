<script>
	import { isMenuOpen } from '$store';

	const toggleIsMenuOpen = () => {
		isMenuOpen.set(!$isMenuOpen);
	};
</script>

<div
	on:click={toggleIsMenuOpen}
	on:keydown={toggleIsMenuOpen}
	class:is-active={$isMenuOpen}
	class="hamburger hamburger--spin"
>
	<span class="hamburger-box">
		<span class="hamburger-inner" />
	</span>
</div>

<style lang="scss">
	@import '$lib/scss/mixins.scss';

	/*
   * Largely adopted from Hamburgers
   * Tasty CSS-animated hamburgers
   * https://jonsuh.com/hamburgers 
   * Author Jonathan Suh @jonsuh
  */

	@include for(phone-only) {
		/* Settings */
		$hamburger-padding-x: 0 !default;
		$hamburger-padding-y: 0 !default;
		$hamburger-layer-width: 26px !default;
		$hamburger-layer-height: 4px !default;
		$hamburger-layer-spacing: 6px !default;
		$hamburger-layer-color: var(--color--header-accent) !default;
		$hamburger-layer-border-radius: 0 !default;
		$hamburger-hover-opacity: 0.8 !default;
		$hamburger-active-layer-color: var(--color--header-background) !default;
		$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

		$hamburger-hover-use-filter: false !default;
		$hamburger-hover-filter: opacity(50%) !default;
		$hamburger-active-hover-filter: $hamburger-hover-filter !default;

		.hamburger {
			position: absolute;
			right: 1rem;
			top: 1.2rem;
			visibility: visible;
			z-index: 2;
		}

		/* Base Hamburger */
		.hamburger {
			cursor: pointer;
			display: inline-block;
			padding: $hamburger-padding-y $hamburger-padding-x;

			transition-property: opacity, filter;
			transition-duration: 0.15s;
			transition-timing-function: linear;

			&:hover {
				@if $hamburger-hover-use-filter == true {
					filter: $hamburger-hover-filter;
				} @else {
					opacity: $hamburger-hover-opacity;
				}
			}

			&.is-active {
				&:hover {
					@if $hamburger-hover-use-filter == true {
						filter: $hamburger-active-hover-filter;
					} @else {
						opacity: $hamburger-active-hover-opacity;
					}
				}

				.hamburger-inner,
				.hamburger-inner::before,
				.hamburger-inner::after {
					background-color: $hamburger-active-layer-color;
				}
			}
		}

		.hamburger-box {
			width: $hamburger-layer-width;
			height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
			display: inline-block;
			position: relative;
		}

		.hamburger-inner {
			display: block;
			top: 50%;
			margin-top: calc($hamburger-layer-height / -2);

			&,
			&::before,
			&::after {
				width: $hamburger-layer-width;
				height: $hamburger-layer-height;
				background-color: $hamburger-layer-color;
				border-radius: $hamburger-layer-border-radius;
				position: absolute;
				transition-property: transform;
				transition-duration: 0.15s;
				transition-timing-function: ease;
			}

			&::before,
			&::after {
				content: '';
				display: block;
			}

			&::before {
				top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
			}

			&::after {
				bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
			}
		}

		.hamburger--spin {
			.hamburger-inner {
				transition-duration: 0.22s;
				transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

				&::before {
					transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
				}

				&::after {
					transition: bottom 0.1s 0.25s ease-in,
						transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
				}
			}

			&.is-active {
				.hamburger-inner {
					transform: rotate(225deg);
					transition-delay: 0.12s;
					transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

					&::before {
						top: 0;
						opacity: 0;
						transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
					}

					&::after {
						bottom: 0;
						transform: rotate(-90deg);
						transition: bottom 0.1s ease-out,
							transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
					}
				}
			}
		}
	}

	@include for(tablet-and-up) {
		.hamburger {
			display: none;
			visibility: hidden;
		}
	}
</style>
