<script lang="ts">
	import { siteTitle } from '$lib/config';
	import { description } from '$lib/data';
	import { submissionStatus } from '$lib/store';
	import Confirmation from '$lib/components/Confirmation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact | {siteTitle}</title>
	<meta data-key="description" name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Contact | {siteTitle}" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://hendrikharlichs.de/share.png" />
	<meta name="twitter:title" content="Contact | {siteTitle}" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://hendrikharlichs.de/share.png" />
</svelte:head>

<h1>Contact</h1>

<p>
	Fancy a chat? Fill in the contact form here. Email addresses provided will
	only be used for replies.
</p>

<div>
	{#if $submissionStatus}
		<Confirmation />
	{:else}
		<ContactForm />
	{/if}
</div>

<style lang="scss">
	div {
		height: 354px;
		margin: 0.5rem 0;

		@include for(tablet-and-up) {
			height: 362px;
			margin: 0 auto;
			width: 24rem;
		}
	}
</style>
