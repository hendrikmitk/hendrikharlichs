<script lang="ts">
	import type Post from '$lib/types/post';
	import PostPreview from './PostPreview.svelte';

	export let posts: Post[];
</script>

<ul>
	{#each posts as post}
		<PostPreview {post} />
	{/each}
</ul>
