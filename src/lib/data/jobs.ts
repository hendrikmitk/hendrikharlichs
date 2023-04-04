import type { Employer } from '$types';

export const jobs: Employer[] = [
	{
		company: 'CHECK24',
		location: 'Hamburg',
		positions: [
			{
				dateBegin: '2022-05',
				dateEnd: undefined,
				description:
					'Development and operation of the comparison and application platform for public health insurers.',
				duties: [
					'Development of customer frontends, APIs and back-office applications',
					'Product engineering following agile methods and clean code principles',
					'Cooperation with product management and MD to drive customer value',
					'Maintenance of CI/CD pipelines to increase automation level and pace'
				],
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
				jobTitle: 'Junior Frontend Developer'
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
