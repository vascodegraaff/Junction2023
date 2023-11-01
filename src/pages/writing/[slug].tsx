import React from 'react';
import { ListDetailView, SiteLayout } from "~/components/Layout";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import {
  type PostData,
  getAllPostData,
  getPostData,
} from "~/server/MarkdownLib";
import { RenderPostData } from "~/components/Data";
import Markdown from "react-markdown";

export const getServerSideProps = (async (context) => {
  const { slug } = context.query;

  const post = await getPostData(slug as string);
	const allPost = await getAllPostData();
  return { props: { post , allPost} };
}) satisfies GetServerSideProps<{
  post: PostData;
	allPost: PostData[];
}>;

export default function Page({
  post,
	allPost
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
			<div className='hidden lg:flex'>
				<ListDetailView list={<RenderPostData allData={allPost}/>} hasDetail={false} detail={null} />
			</div>
      <div className="h-screen overflow-y-auto">
        <TitleBar
          title={post.title}
          backButton={true}
          backButtonHref="/writing"
          globalMenu={false}
        />
        <div className="prose flex-full scrollable-area mx-auto w-full py-12">
          <Markdown>{post.markdown}</Markdown>
        </div>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page: React.ReactNode) {
	return (
		<SiteLayout>{page}</SiteLayout>
	);
}
