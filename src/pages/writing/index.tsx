import { ListDetailView, SiteLayout } from "~/components/Layout";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { type PostData, getAllPostData } from '~/server/MarkdownLib'
import { RenderPostData } from "~/components/Data";

export const getServerSideProps = (async () => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const repo = await res.json()
	const allData = await getAllPostData();
  return { props: { allData } }
}) satisfies GetServerSideProps<{
  allData: PostData[] 
}>
 
export default function WritingPage({
  allData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <ListDetailView list={<RenderPostData allData={allData}/>} hasDetail={false} detail={null} />;
}

WritingPage.getLayout = function getLayout(page: React.ReactNode) {
	return (
	<SiteLayout>{page}</SiteLayout>
	)
}
