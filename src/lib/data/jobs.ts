import type { Employer } from '$lib/types';

export const jobs: Employer[] = [
	{
		company: 'awork',
		positions: [
			{
				dateBegin: '2025-05',
				dateEnd: undefined,
				description:
					'Working on features and experiments to improve conversion and retention in a SaaS product.',
				duties: [
					'Development of scalable features in a large, state-of-the-art Angular 20+ application',
					'Collaboration with product, marketing, and sales to identify and validate growth opportunities',
					'Implementation of growth initiatives including A/B tests and onboarding improvements',
					'Leveraging AI tools to accelerate implementation speed and maintain code excellence',
					'Building automations to optimize internal workflows and product processes'
				],
				jobTitle: 'Full-Stack Growth Engineer',
				location: 'Hamburg, hybrid',
				skills: [
					{
						label: 'Angular',
						highlight: true
					},
					{
						label: 'TypeScript',
						highlight: true
					},
					{
						label: 'Claude Code',
						highlight: false
					},
					{
						label: 'CSS',
						highlight: false
					},
					{
						label: 'Figma',
						highlight: false
					},
					{
						label: 'GitHub',
						highlight: false
					},
					{
						label: 'HTML',
						highlight: false
					},
					{
						label: 'MCP',
						highlight: false
					},
					{
						label: 'n8n',
						highlight: false
					}
				]
			}
		],
		url: 'https://www.awork.com/jobs'
	},
	{
		company: 'CHECK24',
		positions: [
			{
				dateBegin: '2024-04',
				dateEnd: '2025-04',
				description:
					'Development and operation of the comparison and application platform for public health insurers.',
				duties: [
					'Development of customer frontends, APIs and back-office applications',
					'Product engineering following agile methods and clean code principles',
					'Cooperation with product management and MD to drive customer value',
					'Maintenance of CI/CD pipelines to increase automation level and pace'
				],
				jobTitle: 'Professional Software Developer',
				location: 'Hamburg, on-site',
				skills: [
					{
						label: 'Angular',
						highlight: true
					},
					{
						label: 'TypeScript',
						highlight: true
					},
					{
						label: 'RxJS',
						highlight: false
					},
					{
						label: 'NgRx',
						highlight: false
					},
					{
						label: 'PHP',
						highlight: true
					},
					{
						label: 'MySQL',
						highlight: false
					},
					{
						label: 'Linux',
						highlight: false
					},
					{
						label: 'Docker',
						highlight: false
					},
					{
						label: 'Bamboo',
						highlight: false
					}
				]
			},
			{
				dateBegin: '2022-05',
				dateEnd: '2024-03',
				description:
					'Gaining hands-on experience in building and maintaining a large enterprise application.',
				duties: [
					'Develop features to enhance the comparison platform',
					'Build expertise in PHP, MySQL, Angular and TypeScript',
					'Apply agile methodologies and clean code principles',
					'Acquire insights into software architecture patterns'
				],
				jobTitle: 'Junior Software Developer',
				location: 'Hamburg, hybrid',
				skills: [
					{
						label: 'Angular',
						highlight: true
					},
					{
						label: 'TypeScript',
						highlight: true
					},
					{
						label: 'RxJS',
						highlight: false
					},
					{
						label: 'NgRx',
						highlight: false
					},
					{
						label: 'PHP',
						highlight: false
					},
					{
						label: 'MySQL',
						highlight: false
					},
					{
						label: 'HTML',
						highlight: true
					},
					{
						label: 'CSS',
						highlight: true
					}
				]
			}
		],
		url: 'https://jobs.check24.de/'
	},
	{
		company: 'appmotion',
		positions: [
			{
				dateBegin: '2021-07',
				dateEnd: '2022-04',
				description:
					'Implementation of different projects for customers in the automotive and orthopedic industry.',
				jobTitle: 'Junior Frontend Developer',
				location: 'Hamburg, hybrid',
				skills: [
					{
						label: 'Vue.js',
						highlight: false
					},
					{
						label: 'Tailwind CSS',
						highlight: false
					},
					{
						label: 'TYPO3',
						highlight: false
					},
					{
						label: 'HTML',
						highlight: false
					},
					{
						label: 'CSS',
						highlight: false
					},
					{
						label: 'Sass',
						highlight: false
					},
					{
						label: 'JavaScript',
						highlight: false
					}
				]
			}
		],
		url: 'https://appmotion.de/'
	},
	{
		company: 'FFW',
		positions: [
			{
				dateBegin: '2020-02',
				dateEnd: '2021-04',
				description:
					'Managing a large-scale digital project in the mobility sector for an urban public transport company.',
				duties: [
					'Management of a cross-functional team according to agile methodologies',
					'Supervision of the launch and development of a multimodal mobility app',
					'Planning, implementation and monitoring of individual project phases'
				],
				jobTitle: 'Project Manager',
				location: 'Hamburg, on-site'
			},
			{
				dateBegin: '2017-07',
				dateEnd: '2020-01',
				description:
					'Requirements engineering as well as technical supervision and release planning for the ongoing development of the on-board and landside infotainment infrastructure of a leading cruise line.',
				jobTitle: 'Product Owner',
				location: 'Hamburg, on-site'
			}
		],
		url: 'https://ffw.com/'
	}
];
