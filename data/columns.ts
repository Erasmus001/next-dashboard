import { Column } from '@/types';

export const Columns: Column[] = [
	{
		id: 1,
		title: 'Todo',
		items: [
			{
				taskId: '1100045',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
			{
				taskId: '1100046',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
			{
				taskId: '1100047',
				title: 'Third task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
			{
				taskId: '1100048',
				title: 'Forth task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
		],
	},
	{
		id: 2,
		title: 'In Progress',
		items: [
			{
				taskId: '1100045',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
			{
				taskId: '1100045',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
			{
				taskId: '1100045',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
		],
	},
	{
		id: 3,
		title: 'In Review',
		items: [
			{
				taskId: '1100045',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'In Review',
				comment: [
					{
						userId: '#WEB_10001',
						date: '15th May, 2023',
						comment: 'My very first comment',
					},
				],
			},
			{
				taskId: '1100045',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'In Review',
				comment: [],
			},
		],
	},
	{
		id: 4,
		title: 'Completed',
		items: [
			{
				taskId: '1000045',
				title: 'First task',
				desc: 'First task description',
				assignees: ['Nathan', 'Daniel', 'Micky'],
				due_date: '20th May, 2024',
				tags: ['Web Design', 'Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
			{
				taskId: '1100045',
				title: 'Second task',
				desc: 'Second task description',
				assignees: ['Daniel', 'Micky'],
				due_date: '15th March, 2024',
				tags: ['Frontend'],
				priority: 'High',
				subTasks: [],
				createdBy: 'Bright',
				status: 'Completed',
				comment: [],
			},
		],
	},
];
