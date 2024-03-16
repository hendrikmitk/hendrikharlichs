<script lang="ts">
	import { SubmissionStatus } from '$lib/enum';
	import { submissionStatus } from '$lib/store';
	import Check from '$lib/icons/Check.svelte';
	import Cross from '$lib/icons/Cross.svelte';
	import Spinner from '$lib/icons/Spinner.svelte';

	const resetSubmissionStatus = () => {
		submissionStatus.set(undefined);
	};
</script>

<div class="status">
	<div class="{$submissionStatus} icon">
		{#if $submissionStatus === SubmissionStatus.Submitting}
			<Spinner />
		{:else if $submissionStatus === SubmissionStatus.Failed}
			<Cross />
		{:else}
			<Check />
		{/if}
	</div>
	<div class="text">
		{#if $submissionStatus === SubmissionStatus.Failed}
			<p>Something went wrong :(</p>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={resetSubmissionStatus} on:keydown={resetSubmissionStatus}>
				Try again
			</a>
		{:else if $submissionStatus === SubmissionStatus.Success}
			<p>Want to make another request?</p>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={resetSubmissionStatus} on:keydown={resetSubmissionStatus}>
				Reset contact form
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	.status {
		display: flex;
		flex-direction: column;
		height: inherit;
		row-gap: 0.75rem;

		.icon,
		.text {
			display: flex;
			flex: 1;
			justify-content: center;
		}

		.icon {
			align-items: flex-end;

			&.submitting {
				color: var(--color--progress);
			}

			&.failed {
				color: var(--color--error);
			}

			&.success {
				color: var(--color--success);
			}

			:global(svg) {
				height: 5rem;
				width: auto;
			}
		}

		.text {
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
</style>
