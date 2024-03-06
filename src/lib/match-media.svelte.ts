class MatchMedia {
	matches = $state(false);
}

const createMatchMedia = (query: string) => {
	const media = new MatchMedia();
	const mediaQueryList = window.matchMedia(query);
	const updateState = () => {
		media.matches = mediaQueryList.matches;
	};
	updateState();

	$effect(() => {
		mediaQueryList.addEventListener('change', updateState);
		return () => mediaQueryList.removeEventListener('change', updateState);
	});

	return media;
};

// prettier-ignore
type MatchMediaReturn<T> =
	T extends Record<string, string> ? Record<keyof T, MatchMedia> :
    T extends string ? MatchMedia :
    never;

export const matchMedia = <T extends Record<string, string> | string>(
	query: T
): MatchMediaReturn<T> | undefined => {
	if (typeof window === 'undefined') return;

	if (typeof query === 'string') {
		return createMatchMedia(query) as MatchMediaReturn<typeof query>;
	}

	const matchMediaList = {} as Record<keyof T, MatchMedia>;
	for (let key in query) {
		const media = createMatchMedia(query[key] as string);
		matchMediaList[key] = media;
	}
	return matchMediaList as MatchMediaReturn<typeof query>;
};
