export interface Skill {
	label: string;
	highlight: boolean;
}

export interface Position {
	dateBegin: string;
	dateEnd?: string;
	description?: string;
	duties?: string[];
	jobTitle: string;
	location: string;
	skills?: Skill[];
}

export default interface Employer {
	company: string;
	positions: Position[];
	url: string;
}
