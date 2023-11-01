import { SiteLayout } from "~/components/Layout";

export default function Bookmarks() {
	return (
		<>
			<h1>Bookmarks</h1>
		</>
	);
}

Bookmarks.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<SiteLayout>{page}</SiteLayout>
	)
}
