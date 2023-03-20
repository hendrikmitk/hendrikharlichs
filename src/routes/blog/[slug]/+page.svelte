<script>
	export let data;

	const { content, title } = data;
</script>

<article>
	<h1>{title}</h1>

	<svelte:component this={content} />
</article>
