<script lang="ts">
	import { siteTitle } from '$config';
  import { description } from '$data';
  import type { Post } from '$types';
  import PostList from '$lib/components/PostList.svelte';

	export let data;

  let posts: Post[] = data.posts;
</script>

<svelte:head>

<title>Notes | { siteTitle }</title>
<meta data-key="description" name="description" content={description} />
<meta property="og:type" content="article" />
<meta property="og:title" content="Notes" />
<meta property="og:description" content={description} />
<meta name="twitter:title" content="Notes" />
<meta name="twitter:description" content={description} />
</svelte:head>

# All Blog Posts

<PostList {posts} />
