// import { TodoistApi } from '@doist/todoist-api-typescript';
// import { type } from 'os';
// import { env } from 'process';

// export type Project = {
// 	id: string;
// 	name: string;
// 	// color: string;
// 	// commentCount: number;
// 	// isShared: boolean;
// 	isFavorite: boolean;
// 	url: string;
// 	isInboxProject: boolean;
// 	isTeamInbox: boolean;
// 	order: number;
// 	viewStyle: string;
// };

// export type Due = {
// 	string: string;
// 	date: string;
// 	isRecurring: boolean;
// 	datetime?: string;
// 	timezone?: string;
// };

// export type Duration = {
// 	amount: number;
// 	unit: string;
// };

// export type Task = {
// 	id: string;
// 	// projectId: string;
// 	// sectionId: string | null;
// 	content: string;
// 	description: string;
// 	isCompleted: boolean;
// 	labels: string[];
// 	// parentId: string | null;
// 	// order: number;
// 	// priority: number;
// 	due: Due | null;
// 	url: string;
// 	// commentCount: number;
// 	createdAt: string;
// 	// creatorId: string;
// 	// assigneeId: string | null;
// 	// assignerId: string | null;
// 	duration: Duration | null;
// };

// export class TodoistLib {
// 	private todoistClient: TodoistApi;

// 	constructor() {
// 		this.todoistClient = new TodoistApi(env.TODOIST_API_TOKEN!);
// 	}

// 	public async getProjects(): Promise<Project[]> {
// 		return await this.todoistClient.getProjects();
// 	}

// 	public async getUpcomingTasks(): Promise<Task[]> {
// 		const allTask = await this.todoistClient.getTasks({
// 			filter: '14 days',
// 		});
// 		return allTask.map((task) => {
// 			return {
// 				id: task.id,
// 				projectId: task.projectId,
// 				// sectionId: task.sectionId,
// 				content: task.content,
// 				// description: task.description,
// 				isCompleted: task.isCompleted,
// 				labels: task.labels,
// 				// parentId: task.parentId,
// 				// order: task.order,
// 				// priority: task.priority,
// 				due: task.due,
// 				// url: task.url,
// 				// commentCount: task.commentCount,
// 				createdAt: task.createdAt,
// 				// creatorId: task.creatorId,
// 				// assigneeId: task.assigneeId,
// 				// assignerId: task.assignerId,
// 				duration: task.duration
// 					? {
// 							amount: task.duration.amount,
// 							unit: task.duration.unit,
// 					  }
// 					: null,
// 			};
// 		});
// 	}

// 	public test() {
// 		// const projectId = 2203306141; // replace with your actual project id

// 		// fetch('https://api.todoist.com/sync/v9/rest/completed/get_all', {
// 		// // fetch('https://api.todoist.com/rest/v2/rest/v2/tasks', {
// 		// 	method: 'GET',
// 		// 	headers: {
// 		// 		Authorization: 'Bearer ' + env.TODOIST_API_TOKEN!,
// 		// 	},
// 		// })
// 		// 	.then((response) => response.json())
// 		// 	.then((data) => console.log(data))
// 		// 	.catch((error) => console.error('Error:', error));
// 		const clientId = 'bf9e24c259c14d6caded102ebf5a1577'; // replace with your actual client id
// 		const clientSecret = '1f5c00762f1f428c96fa9fef4d3a746b'; // replace with your actual client secret
// 		const code = '24537_fdec0cab31090e45b28e0d76'; // replace with your actual personal token
// 		// const code = 'abcdefg'

// 		const redirectUri = 'https://example.com'; // replace with your actual redirect uri

// 		fetch('https://todoist.com/oauth/access_token', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 			body: `client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`,
// 		})
// 			.then((response) => response.json())
// 			.then((data) => console.log(data))
// 			.catch((error) => console.error('Error:', error));
// 		// fetch('https://api.todoist.com/sync/v9/access_tokens/migrate_personal_token', {
// 		// 	method: 'POST',
// 		// 	headers: {
// 		// 		'Content-Type': 'application/json',
// 		// 	},
// 		// 	body: JSON.stringify({
// 		// 		client_id: clientId,
// 		// 		client_secret: clientSecret,
// 		// 		personal_token: personalToken,
// 		// 		scope: 'data:read',
// 		// 	}),
// 		// })
// 		// 	.then((response) => response.json())
// 		// 	.then((data) => console.log(data))
// 		// 	.catch((error) => console.error('Error:', error));
// 	}
// }
