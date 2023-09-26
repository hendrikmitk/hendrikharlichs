export interface ReadingTime {
	minutes: number;
	text: string;
	words: number;
}

export default interface Post {
	created: string;
	draft: boolean;
	slug: string;
	summary: string;
	title: string;
	updated?: string;
}
