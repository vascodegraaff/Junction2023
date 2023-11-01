import { TodoistApi, type Task, type Project} from '@doist/todoist-api-typescript';
import React from 'react';
import { SiteLayout } from '~/components/Layout';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '~/components/ui/card';
// import { TodoistLib } from '~/lib/TodoistLib';
import { env } from 'process';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next/types';

// type Project = {
//   id: string;
//   name: string;
//   color: string;
//   commentCount: number;
//   isShared: boolean;
//   isFavorite: boolean;
//   url: string;
//   isInboxProject: boolean;
//   isTeamInbox: boolean;
//   order: number;
//   viewStyle: string;
// };

// type Task = {
//   id: string,
//   projectId: string,
//   content: string,
//   completed: boolean,
//   labelIds: string[],
//   parent: number,
//   order: number,
//   priority: number,
//   commentCount: number,
//   creator: number,
//   assignee: number,
//   created: string,
//   due: {
//     recurring: boolean,
//     string: string,
//     date: string,
//     datetime: string,
//     timezone: string,
//   },
//   url: string,
//   duration: {
//     value: number,
//     unit: string,
//   }|null,


// }
type Data = Project[] | Task[];


const DataCard = ({ title, subtitle, data }: { title: string, subtitle: string, data: Data }) => {
  return (
    <Card className="flex-shrink">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <code>{subtitle}</code>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="bg-gray-200 p-4 rounded-lg">
          <pre className='text-xs'>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </CardContent>
    </Card>
  );
};

export const getStaticProps = (async () => {
  const client = new TodoistApi(env.TODOIST_API_TOKEN!);
  const allProject = await client.getProjects();
  const allTask = await client.getTasks();

  return {
    props: {
      allProject,
      allTask,
    }
  }
}) satisfies GetStaticProps<{
  allProject: Project[];
  allTask: Task[];
}>;

export default function Page({ allProject, allTask }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <DataCard title="Todoist data" subtitle="allProject" data={allProject} />
      <DataCard title="Todoist data" subtitle="allTask" data={allTask} />
    </>
  );
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <SiteLayout>{page}</SiteLayout>
  );
}
