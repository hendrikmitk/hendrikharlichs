<script>
	import { siteTitle } from '$config';
	import { description } from '$data';
</script>

<svelte:head>
	<title>Imprint | {siteTitle}</title>
	<meta data-key="description" name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Imprint" />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content="Imprint" />
	<meta name="twitter:description" content={description} />
</svelte:head>

<h1>Impressum</h1>

<p>Inhaltlich verantwortlich gemäß § 5 TMG:</p>

<p>
	Hendrik Harlichs<br />Baakenallee 19<br />20457 Hamburg
</p>

<h2>Kontakt</h2>

Telefon: +49 (0) 176 247 017 64<br />E-Mail:
<a href="mailto:info@hendrikharlichs.de" rel="noopener noreferrer"
	>info@hendrikharlichs.de</a
>

<h2>Haftungshinweis</h2>

<p>
	Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die
	Inhalte externer Links.<br />Für den Inhalt der verlinkten Seiten sind
	ausschließlich deren Betreiber verantwortlich.
</p>

<p>
	Note: This page is in German to conform with the imprint requirements of
	German law.
</p>
