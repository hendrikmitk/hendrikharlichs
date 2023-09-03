<script lang="ts">
	import type { Skill } from '$lib/types/job';
	import SkillTag from '$lib/components/SkillTag.svelte';

	export let skills: Skill[];

	const compareLabel = (a: Skill, b: Skill) => {
		if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
		if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
		return 0;
	};
</script>

<ul class="position__skills">
	{#each skills.filter((skill) => skill.highlight).sort(compareLabel) as skill}
		<SkillTag {skill} />
	{/each}
	{#each skills.filter((skill) => !skill.highlight).sort(compareLabel) as skill}
		<SkillTag {skill} />
	{/each}
</ul>

<style lang="scss">
	.position {
		&__skills {
			display: flex;
			flex-wrap: wrap;
			gap: 0.375rem 0.3125rem;
		}
	}
</style>
