<script lang="ts">
	import type { Employer } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import SkillList from '$lib/components/SkillList.svelte';
	import CalendarIcon from '$lib/icons/Calendar.svelte';
	import { description } from '$lib/data';

	export let job: Employer;
</script>

<li class="job">
	<h2 class="job__company">
		<a href={job.url} target="_blank" rel="external noopener noreferrer">
			{job.company}
		</a>
	</h2>

	<ul class="job__positions">
		{#each job.positions as position}
			<li class="position">
				<h3 class="position__title">{position.jobTitle}</h3>
				{#if position.description}
					<p class="position__description">
						{position.description}
					</p>
				{/if}
				{#if position.duties}
					<ul class="position__duties">
						{#each position.duties as duty}
							<li>{duty}</li>
						{/each}
					</ul>
				{/if}
				{#if position.skills}
					<SkillList skills={position.skills} />
				{/if}
				<small class="position__meta">
					<CalendarIcon />
					{#if position.dateEnd}
						<time datetime={position.dateBegin}>
							{formatDate(position.dateBegin, 'short')}
						</time>
						–
						<time datetime={position.dateEnd}>
							{formatDate(position.dateEnd, 'short')}
						</time>
					{:else}
						Since
						<time datetime={position.dateBegin}>
							{formatDate(position.dateBegin, 'short')}
						</time>
					{/if}
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
