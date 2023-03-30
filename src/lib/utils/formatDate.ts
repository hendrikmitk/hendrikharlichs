const formatDate = (
	date: string,
	notation: 'long' | 'short' = 'long'
): string => {
	const isShort: boolean = notation === 'short';

	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: isShort ? '2-digit' : 'long',
		day: isShort ? undefined : 'numeric'
	});
};

export default formatDate;
