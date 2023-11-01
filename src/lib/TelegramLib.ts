// import TelegramBot from 'node-telegram-bot-api';
// import { env } from 'process';

// export class TelegramLib {
// 	private bot: TelegramBot;
// 	private chatId: string;

// 	constructor() {
// 		this.bot = new TelegramBot(env.TELEGRAM_BOT_TOKEN as string, {polling: true}) as TelegramBot;
// 		this.chatId = env.TELEGRAM_CHAT_ID!;
// 	}

// 	public sendMessage(message: string, dateTime: string): void {
// 		// Code for sending message goes here
		
// 		await this.bot.sendMessage(this.chatId, message + ' ' + dateTime);
// 	}

// }
