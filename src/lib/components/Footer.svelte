<script lang="ts">
	import FooterIcon from './FooterIcon.svelte';
	import GithubIcon from '$lib/assets/icons/Github.svelte';
	import LinkedinIcon from '$lib/assets/icons/Linkedin.svelte';
	import MailIcon from '$lib/assets/icons/Mail.svelte';
	import MastodonIcon from '$lib/assets/icons/Mastodon.svelte';

	const currentYear: number = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer__copyright">
		© {currentYear.toString()} Hendrik Harlichs. Made in Hamburg
	</div>
	<div class="footer__social">
		<FooterIcon href="https://mas.to/@hendrik">
			<MastodonIcon />
		</FooterIcon>
		<FooterIcon href="https://github.com/hendrikmitk">
			<GithubIcon />
		</FooterIcon>
		<FooterIcon href="https://www.linkedin.com/in/hendrikharlichs">
			<LinkedinIcon />
		</FooterIcon>
		<FooterIcon href="mailto:hi@hendrikharlichs.de">
			<MailIcon />
		</FooterIcon>
	</div>
	<div class="footer__credits">
		Powered by <a href="https://kit.svelte.dev/">SvelteKit</a>. Hosted on
		<a href="https://vercel.com/">Vercel</a>.
	</div>
	<div class="footer__links">
		<a href="/imprint">Imprint</a> |
		<a href="https://github.com/hendrikmitk/hendrikharlichs">Source Code</a>
	</div>
</footer>

<style lang="scss">
	@import '$lib/assets/scss/mixins.scss';

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
