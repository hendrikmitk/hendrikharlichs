export interface Skill {
	label: string;
	highlight: boolean;
}

export interface Position {
	dateBegin: string;
	dateEnd?: string;
	description: string;
	duties?: string[];
	jobTitle: string;
	skills?: Skill[];
}

export default interface Employer {
	company: string;
	location: string;
	positions: Position[];
	url: string;
}
