/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


export interface PostData {
  title: string;
  path: string;
  date: string;
  markdown: string;
}


const postsDirectory = path.join(process.cwd(), '_wiki');

async function getFileNameList() {
  return fs.readdir(postsDirectory);
}

function parseFileName(fileName: string) {
  return fileName.replace(/\.md$/, '').replace('-', ' ');
}

async function getFileContents(fileName: string) {
  let fullPath;
  if (fileName.startsWith(postsDirectory)) {
    fullPath = fileName;
  } else {
    fullPath = path.join(postsDirectory, fileName);
  }
  return await fs.readFile(fullPath, 'utf8');
}

// async function convertMarkdownToHtml(markdown: string) {
//   // eslint-disable-next-line
//   const processedContent = await remark().use(html).process(markdown);
//   // eslint-disable-next-line
//   return processedContent.toString();
// }

export async function getAllPostData(): Promise<PostData[]> {
  const fileNames = await getFileNameList();
  
  const allPostsData = fileNames.map(async (fileName) => {
    const title = parseFileName(fileName);
    const path = title.replace(' ', '-').toLowerCase().replace(".md", "");
    const fileContents = await getFileContents(fileName);
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      path,
      date: matterResult.data.date,
      markdown: matterResult.content,
    } as PostData;
  });

  return Promise.all(allPostsData);
}

export async function getPostData(slug: string): Promise<PostData> {
  const title = slug.replace('-', ' ');
  const path = title.replace(' ', '-').toLowerCase().replace(".md", "");
  const fileContent = await getFileContents(`${slug}.md`);
  const matterResult = matter(fileContent);
  // const contentHtml = await convertMarkdownToHtml(matterResult.content);

  return {
    title: matterResult.data.title,
    path: path,
    date: matterResult.data.date,
    markdown: matterResult.content,
  } as PostData;
}
