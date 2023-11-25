<script lang="ts">
	export let data;

	let url: URL = data.url;
	let title: string = url.searchParams.get('title') || 'Hendrik Harlichs';

	let titleSize = 'title';

	if (title.length <= 20) {
		titleSize = 'title--xl';
	} else if (title.length <= 36) {
		titleSize = 'title--l';
	} else if (title.length <= 58) {
		titleSize = 'title--m';
	}
</script>

<div class="og__wrapper">
	<div class="og__frame">
		<div class="og__image">
			<div class="header">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="/icon.svg" />
			</div>
			<h1 class={titleSize}>{title}</h1>
		</div>
	</div>
</div>

<style lang="scss">
	.og {
		&__wrapper {
			align-items: center;
			display: flex;
			justify-content: center;
			min-height: 100vh;
			width: 100%;
			-webkit-font-smoothing: auto;
			-moz-osx-font-smoothing: auto;
		}

		&__frame {
			border: 1px dashed #ccc;
		}

		&__image {
			$spacing-x: 6.5rem;

			width: 1200px;
			height: 630px;

			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.header {
				background-color: var(--color--header-background);
				padding: 1.25rem $spacing-x;

				img {
					$logo-size: 8rem;

					height: $logo-size;
					width: $logo-size;
				}
			}

			h1 {
				font-weight: 500;
				line-height: 1.25;
				margin: 2.5rem $spacing-x 5rem;
				overflow: hidden;

				&.title {
					font-size: 4rem;

					&--m {
						font-size: 4.5rem;
					}

					&--l {
						font-size: 6rem;
					}

					&--xl {
						font-size: 8rem;
					}
				}
			}
		}
	}
</style>
