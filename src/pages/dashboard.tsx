import { SiteLayout } from "~/components/Layout";
import CardsMetric from "../components/Cards";
import CardsStats from "../components/Cards/CardStats";
import React from "react";

export default function Home() {
	return (
		<div className="flex flex-col">
		 <div className="flex flex-row">
			<CardsMetric />
			<CardsMetric />
		 </div>
		 <div className="">
			<CardsStats />
		 </div>
		</div>
	);
}

Home.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<SiteLayout>{page}</SiteLayout>
	);
}
