export type CommentType = {
	readonly userId: number | string;
	comment: string;
	date: string;
};

export type TaskType = {
	id: string | number;
	title: string;
	desc: string;
};

export type ProjectType = {
	id: string | number;
	title: string;
	desc: string;
	tasks?: TaskType[];
};

export const Tasks: TaskType[] = [
	{
		id: '2245',
		title: 'My first task',
		desc: 'My first task description..',
	},
];

export type Task = {
	readonly taskId: number | string;
	title: string;
	desc: string;
	assignees: string[] | string;
	due_date: string;
	tags: string[] | string;
	priority: string;
	subTasks?: Task[];
	createdBy: string;
	status: 'Todo' | 'In Progress' | 'In Review' | 'Completed';
	comment?: CommentType[];
};

//* Task columns
export type Column = {
	readonly id: number | string;
	title: string;
	items: Task[];
};
