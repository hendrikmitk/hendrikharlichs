<script lang="ts">
	import { siteTitle } from '$config';
  import type Post from '$lib/types/post';
  import PostList from '$lib/components/PostList.svelte';

	export let data;

  let posts: Post[] = data.posts;
</script>

<svelte:head>

<title>Blog | { siteTitle }</title>
</svelte:head>

# All Blog Posts

<PostList {posts} />
