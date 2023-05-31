<script lang="ts">
	import type { Post } from '$types';
	import PostPreview from '$lib/components/PostPreview.svelte';

	export let posts: Post[];
</script>

<ul>
	{#each posts as post}
		<PostPreview {post} />
	{/each}
</ul>
