<script lang="ts">
	import { matchMedia } from '$lib/match-media.svelte.js';

	let prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
	let prefersColorScheme = matchMedia('(prefers-color-scheme: dark)');

	let breakpoints = matchMedia({
		sm: '(min-width: 640px)',
		md: '(min-width: 768px)',
		lg: '(min-width: 1024px)',
		xl: '(min-width: 1280px)',
		'2xl': '(min-width: 1536px)'
	});
</script>

<h1>Match Media Svelte</h1>

<p data-testid="motion">(prefers-reduced-motion: reduced) = {prefersReducedMotion?.matches}</p>
<p>(prefers-color-scheme: dark) = {prefersColorScheme?.matches}</p>

<p>(min-width: 640px) = {breakpoints?.sm.matches}</p>
<p>(min-width: 768px) = {breakpoints?.md.matches}</p>
<p>(min-width: 1024px) = {breakpoints?.lg.matches}</p>
<p>(min-width: 1280px) = {breakpoints?.xl.matches}</p>
<p>(min-width: 1536px) = {breakpoints?.['2xl'].matches}</p>
