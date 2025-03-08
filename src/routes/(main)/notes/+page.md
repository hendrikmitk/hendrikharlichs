<script lang="ts">
	import { siteTitle } from '$lib/config';
  import { description } from '$lib/data';
  import type { Post } from '$lib/types';
  import PostList from '$lib/components/PostList.svelte';

	export let data;

  let posts: Post[] = data.posts;
</script>

<svelte:head>

<title>Notes | { siteTitle }</title>
<meta name="description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:title" content="Notes | { siteTitle }" />
<meta property="og:description" content={description} />
<meta property="og:image" content="https://hendrikharlichs.de/share.png" />
<meta name="twitter:title" content="Notes | { siteTitle }" />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="https://hendrikharlichs.de/share.png" />
</svelte:head>

# All Blog Posts

<PostList {posts} />
