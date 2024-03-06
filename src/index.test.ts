import { describe, it, expect } from 'vitest';
import { matchMedia } from '$lib/match-media.svelte.js';

describe('matchMedia', () => {
	it('should create a new MatchMedia instance with the given query', () => {
		const media = matchMedia('(min-width: 600px)');
		expect(media?.matches).toBe(false); // initial state
	});

	it('should handle an object of queries and return a matching media object for each query', () => {
		const mediaList = matchMedia({
			small: '(min-width: 600px)',
			large: '(min-width: 1200px)'
		});
		expect(mediaList?.small.matches).toBe(false); // initial state
		expect(mediaList?.large.matches).toBe(false); // initial state
	});
});
