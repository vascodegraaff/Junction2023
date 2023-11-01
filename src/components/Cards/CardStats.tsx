import { useTheme } from 'next-themes';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const data = [
	{
		revenue: 10400,
		subscription: 240,
	},
	{
		revenue: 14405,
		subscription: 300,
	},
	{
		revenue: 9400,
		subscription: 200,
	},
	{
		revenue: 8200,
		subscription: 278,
	},
	{
		revenue: 7000,
		subscription: 189,
	},
	{
		revenue: 9600,
		subscription: 239,
	},
	{
		revenue: 11244,
		subscription: 278,
	},
	{
		revenue: 26475,
		subscription: 189,
	},
];

export default function CardsStats() {
	const { theme } = useTheme();

	return (
		<div className="grid sm:grid-cols-2 xl:grid-cols-2">
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-base font-normal">Total Revenue</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">$15,231.89</div>
					<p className="text-xs text-muted-foreground">+20.1% from last month</p>
					<div className="h-[80px]">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
								data={data}
								margin={{
									top: 5,
									right: 10,
									left: 10,
									bottom: 0,
								}}
							>
								<Tooltip
									content={({ active, payload }) => {
										if (active && payload?.length) {
											return (
												<div className="rounded-lg border bg-background p-2 shadow-sm">
													<div className="grid grid-cols-2 gap-2">
														<div className="flex flex-col">
															<span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
															<span className="font-bold text-muted-foreground">{payload[0]?.value}</span>
														</div>
													</div>
												</div>
											);
										}

										return null;
									}}
								/>
								<Line
									type="monotone"
									strokeWidth={2}
									dataKey="revenue"
									activeDot={{
										r: 6,
										style: { fill: 'var(--theme-primary)', opacity: 0.25 },
									}}
									style={{
										stroke: `${theme === 'dark' ? '#ffffff' : '#000000'}`,
									}}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-base font-normal">Subscriptions</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">+2350</div>
					<p className="text-xs text-muted-foreground">+180.1% from last month</p>
					<div className="mt-4 h-[80px]">
						<ResponsiveContainer width="100%" height="100%">
							<BarChart data={data}>
								<Tooltip
									content={({ active, payload }) => {
										if (active && payload?.length) {
											return (
												<div className="rounded-lg border bg-background p-2 shadow-sm">
													<div className="grid grid-cols-2 gap-2">
														<div className="flex flex-col">
															<span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
															<span className="font-bold text-muted-foreground">{payload[0]?.value}</span>
														</div>
													</div>
												</div>
											);
										}

										return null;
									}}
								/>
								<Bar
									dataKey="subscription"
									style={{
										stroke: `${theme === 'dark' ? '#ffffff' : '#000000'}`,
									}}
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
