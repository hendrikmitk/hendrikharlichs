interface ReadingTime {
	minutes: number;
	text: string;
	words: number;
}

export default interface Post {
	created: string;
	draft: boolean;
	readingTime: ReadingTime;
	slug: string;
	summary: string;
	keywords: string;
	title: string;
	updated?: string;
}
