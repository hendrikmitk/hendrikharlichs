<script lang="ts">
	import type { Employer } from '$types';
	import { formatDate, getDateString } from '$utils';
	import CalendarIcon from '$lib/icons/Calendar.svelte';

	export let job: Employer;
</script>

<li class="job">
	<h2 class="job__company">
		<a href={job.url} target="_blank" rel="noopener noreferrer">
			{job.company}
		</a>
	</h2>

	<ul class="job__positions">
		{#each job.positions as position}
			<li class="position">
				<h3 class="position__title">{position.jobTitle}</h3>
				<p class="position__description">
					{position.description}
				</p>
				{#if position.duties}
					<ul class="position__duties">
						{#each position.duties as duty}
							<li>{duty}</li>
						{/each}
					</ul>
				{/if}
				<small class="position__meta">
					<CalendarIcon />
					<time datetime={position.dateBegin}>
						{formatDate(position.dateBegin, 'short')}
					</time>
					–
					<time
						datetime={position.dateEnd ? position.dateEnd : getDateString()}
					>
						{position.dateEnd ? formatDate(position.dateEnd, 'short') : 'today'}
					</time>
				</small>
			</li>
		{/each}
	</ul>
</li>

<style lang="scss">
	.job {
		list-style: none;

		&:not(&:first-of-type) {
			margin-top: 2rem;

			@include for(tablet-and-up) {
				margin-top: 4rem;
			}
		}

		&__company {
			margin-bottom: 0.5rem;

			@include for(tablet-and-up) {
				margin-bottom: 0.75rem;
			}
		}
	}

	.position {
		list-style: none;

		&:not(&:first-of-type) {
			margin-top: 1rem;

			@include for(tablet-and-up) {
				margin-top: 2rem;
			}
		}

		&__meta {
			align-items: center;
			display: flex;
			gap: 0.25rem;

			:global(svg) {
				height: 1rem;
				width: auto;
			}
		}

		&__title {
			margin-top: 0.5rem;

			@include for(tablet-and-up) {
				margin-top: 0.75rem;
			}
		}
	}
</style>
