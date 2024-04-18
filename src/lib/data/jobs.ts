import type { Employer } from '$lib/types';

export const jobs: Employer[] = [
	{
		company: 'CHECK24',
		location: 'Hamburg',
		positions: [
			{
				dateBegin: '2024-04',
				dateEnd: undefined,
				description:
					'Development and operation of the comparison and application platform for public health insurers.',
				duties: [
					'Development of customer frontends, APIs and back-office applications',
					'Product engineering following agile methods and clean code principles',
					'Cooperation with product management and MD to drive customer value',
					'Maintenance of CI/CD pipelines to increase automation level and pace'
				],
				jobTitle: 'Professional Software Developer',
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
				description: undefined,
				jobTitle: 'Junior Software Developer'
			}
		],
		url: 'https://jobs.check24.de/'
	},
	{
		company: 'appmotion',
		location: 'Hamburg',
		positions: [
			{
				dateBegin: '2021-07',
				dateEnd: '2022-04',
				description:
					'Implementation of different projects for customers in the automotive and orthopedic industry.',
				jobTitle: 'Junior Frontend Developer',
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
		location: 'Hamburg',
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
				jobTitle: 'Project Manager'
			},
			{
				dateBegin: '2017-07',
				dateEnd: '2020-01',
				description:
					'Requirements engineering as well as technical supervision and release planning for the ongoing development of the on-board and landside infotainment infrastructure of a leading cruise line.',
				jobTitle: 'Product Owner'
			}
		],
		url: 'https://ffw.com/'
	}
];
