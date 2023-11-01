// import OpenAI from 'openai';
// import { env } from 'process';
// // import { CalendarEvent } from './GoogleCalendarLib';


// enum Model {
//   GPT3Turbo = "gpt-3.5-turbo",
// 	GPT4 = 'gpt-4'
//   // 'gpt-3.5-turbo-16k-0613',
//   // 'text-davinci-002',
//   // 'text-curie-003'
// }

// type Role = 'system' | 'user' | 'assistant';
// type Message = {
//   role: Role;
//   content: string;
// };
// type CompletionCreate = {
//   model: Model;
//   messages: Message[];
// };


// export class OpenaiLib {
// 	private openaiClient: OpenAI;

// 	constructor() {
// 		this.openaiClient = new OpenAI({ apiKey: env.OPENAI_API_KEY! });
// 	}

// 	public async runQuery(question: string, calendarEvents: CalendarEvent[], currentDateTime: Date) {
  
//     const query = currentDateTime.toUTCString() + "\n" + question + JSON.stringify(calendarEvents);
//     console.log(query);
// 		const response = await this.openaiClient.chat.completions.create({
// 			model: Model.GPT3Turbo,
// 			messages: [
// 				{
// 					role: 'system',
// 					content:
// 						'Your purpose is to assist users in organizing calendar events. The expected format for the next query is as follows: <current datetime in UTC>+<question>+<calendar events in JSON format>. Your response should only be a boolean result in JSON format, without any additional text. The response format should be: {"result": ? }.',
// 				},
// 				// {
// 				// 	role: 'user',
// 				// 	content:
// 				// 		'Sun, 15 Oct 2023 20:59:50 GMT\nAre there any events for working out/gym in the next 3 days?[{"summary":"Gym","start":{"date":"2023-10-12"},"end":{"date":"2023-10-13"}},{"summary":"skate commisee","start":{"dateTime":"2023-10-16T18:30:00+02:00","timeZone":"Europe/Amsterdam"},"end":{"dateTime":"2023-10-16T21:00:00+02:00","timeZone":"Europe/Amsterdam"}},{"summary":"Text marco","start":{"date":"2023-10-19"},"end":{"date":"2023-10-20"}},{"summary":"Freddy birthday","start":{"dateTime":"2023-10-20T20:00:00+02:00","timeZone":"Europe/Amsterdam"},"end":{"dateTime":"2023-10-21T00:00:00+02:00","timeZone":"Europe/Amsterdam"}}]',
// 				// },
// 				// {
// 				// 	role: 'assistant',
// 				// 	content:
// 				// 		'{"result": false}',
// 				// },
// 				{
// 					role: 'user',
// 					content: query,
//         },
// 			],
// 		});

// 		return response;
// 	}
// }
