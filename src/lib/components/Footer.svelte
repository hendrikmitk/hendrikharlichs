<script lang="ts">
	import FooterIcon from '$lib/components/FooterIcon.svelte';
	import GithubIcon from '$lib/icons/Github.svelte';
	import LinkedinIcon from '$lib/icons/Linkedin.svelte';
	import MailIcon from '$lib/icons/Mail.svelte';
	import MastodonIcon from '$lib/icons/Mastodon.svelte';
	import StackOverflowIcon from '$lib/icons/StackOverflow.svelte';

	const currentYear: number = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer__copyright">
		© {currentYear.toString()} Hendrik Harlichs. Made in Hamburg.
	</div>
	<div class="footer__social">
		<FooterIcon href="https://mas.to/@hendrik" title="Mastodon">
			<MastodonIcon />
		</FooterIcon>
		<FooterIcon href="https://github.com/hendrikmitk" title="GitHub">
			<GithubIcon />
		</FooterIcon>
		<FooterIcon
			href="https://stackoverflow.com/users/21548850/hendrikmitk"
			title="StackOverflow"
		>
			<StackOverflowIcon />
		</FooterIcon>
		<FooterIcon href="https://linkedin.com/in/hendrikharlichs" title="LinkedIn">
			<LinkedinIcon />
		</FooterIcon>
		<FooterIcon href="mailto:hi@hendrikharlichs.de" title="Mail">
			<MailIcon />
		</FooterIcon>
	</div>
	<div class="footer__credits">
		Powered by <a
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noopener noreferrer">SvelteKit</a
		>. Hosted on
		<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"
			>Vercel</a
		>.
	</div>
	<div class="footer__links">
		<a href="/imprint">Imprint</a> |
		<a
			href="https://github.com/hendrikmitk/hendrikharlichs"
			target="_blank"
			rel="noopener noreferrer">Source Code</a
		>
	</div>
</footer>

<style lang="scss">
	.footer {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 2rem 0;

		&__social {
			display: flex;
			gap: 1rem;
		}
	}
</style>
