<script lang="ts">
	import type { Skill } from '$lib/types/job';

	export let skill: Skill;
</script>

<li class="position__skill" class:position__skill--highlight={skill.highlight}>
	{skill.label}
</li>

<style lang="scss">
	.position {
		&__skill {
			background-color: var(--color--tag-secondary-background);
			border-radius: 0.375rem;
			color: var(--color--tag-secondary-text);
			list-style: none;
			padding: 0.0625rem 0.5rem;

			&--highlight {
				background-color: var(--color--tag-primary-background);
				color: var(--color--tag-primary-text);
			}
		}
	}
</style>
