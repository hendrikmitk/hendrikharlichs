export default interface Post {
	created: string;
	draft: boolean;
	slug: string;
	summary: string;
	title: string;
	updated?: string;
}
