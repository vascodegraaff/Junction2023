// import { google, calendar_v3 } from 'googleapis';
// import { env } from 'process';
// // import { OAuth2Client } from 'google-auth-library';

// export class GoogleCalendarLib {
//   private oAuth2Client: any;
//   private calendar: calendar_v3.Calendar;

//   constructor() {
//     this.oAuth2Client = new google.auth.OAuth2(
//       env.GOOGLE_CLIENT_ID,
//       env.GOOGLE_CLIENT_SECRET,
//       env.GOOGLE_REDIRECT_URI
//     );

//     this.oAuth2Client.setCredentials({ refresh_token: env.GOOGLE_REFRESH_TOKEN });

//     this.calendar = google.calendar({ version: 'v3', auth: this.oAuth2Client });
//   }

//   async getEvents(calendarId: string, timeZone: string, maxResults: number): Promise<CalendarEvent[]> {
//     const response = await this.calendar.events.list({
//       calendarId: calendarId,
//       timeZone: timeZone,
//       singleEvents: true,
//       orderBy: 'startTime',
//       timeMin: new Date().toISOString(),
//       timeMax: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
//       maxResults: maxResults,
//     });

//     return response.data.items?.map((event) => new CalendarEvent(event)) || [];
//   }
// }

// interface Creator {
//   email: string;
// }

// interface Organizer {
//   email: string;
//   displayName: string;
//   self: boolean;
// }

// interface DateTime {
//   dateTime: string;
//   timeZone: string;
// }

// interface Reminders {
//   useDefault: boolean;
// }

// export class CalendarEvent {
//   // kind: string;
//   // etag: string;
//   // id: string;
//   // status: string;
//   // htmlLink: string;
//   // created: string;
//   // updated: string;
//   summary: string;
//   // creator: Creator;
//   // organizer: Organizer;
//   start: DateTime;
//   end: DateTime;
//   // iCalUID: string;
//   // sequence: number;
//   // reminders: Reminders;
//   // eventType: string;

//   constructor(event: any) {
//     // this.kind = event.kind;
//     // this.etag = event.etag;
//     this.summary = event.summary;
//     // this.status = event.status;
//     // this.htmlLink = event.htmlLink;
//     // this.created = event.created;
//     // this.updated = event.updated;
//     // this.creator = event.creator;
//     // this.organizer = event.organizer;
//     this.start = event.start;
//     this.end = event.end;
//     // this.id = event.id;
//     // this.iCalUID = event.iCalUID;
//     // this.sequence = event.sequence;
//     // this.reminders = event.reminders;
//     // this.eventType = event.eventType;
//   }
// }
