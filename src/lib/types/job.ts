export interface Position {
	dateBegin: string;
	dateEnd?: string;
	description: string;
	duties?: string[];
	jobTitle: string;
}

export default interface Employer {
	company: string;
	location: string;
	positions: Position[];
	url: string;
}
