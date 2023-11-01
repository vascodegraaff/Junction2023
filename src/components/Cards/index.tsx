'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{
		average: 400,
		today: 240,
	},
	{
		average: 300,
		today: 139,
	},
	{
		average: 200,
		today: 980,
	},
	{
		average: 278,
		today: 390,
	},
	{
		average: 189,
		today: 480,
	},
	{
		average: 239,
		today: 380,
	},
	{
		average: 349,
		today: 430,
	},
];

export default function CardMetrics() {
	const { theme } = useTheme();

	console.log(theme);
	return (
		<Card>
			<CardHeader>
				<CardTitle>Exercise Minutes</CardTitle>
				<CardDescription>Your excercise minutes are ahead of where you normally are.</CardDescription>
			</CardHeader>
			<CardContent className="pb-4">
				<div className="h-[200px]">
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
														<span className="text-[0.70rem] uppercase text-muted-foreground">Average</span>
														<span className="font-bold text-muted-foreground">{payload[0]?.value}</span>
													</div>
													<div className="flex flex-col">
														<span className="text-[0.70rem] uppercase text-muted-foreground">Today</span>
														<span className="font-bold">{payload[1]?.value}</span>
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
								dataKey="average"
								activeDot={{
									r: 6,
									style: { fill: `${theme === 'dark' ? '#ffffff' : '#000000'}`, opacity: 0.25 },
								}}
								style={{
									stroke: `${theme === 'dark' ? '#ffffff' : '#000000'}`,
									opacity: 0.25,
								}}
							/>
							<Line
								type="monotone"
								dataKey="today"
								strokeWidth={2}
								activeDot={{
									r: 8,
									style: { fill: `${theme === 'dark' ? '#ffffff' : '#000000'}` },
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
		// <ResponsiveContainer width="100%" height="100%">
		// 	<LineChart
		// 		width={500}
		// 		height={300}
		// 		data={data}
		// 		margin={{
		// 			top: 5,
		// 			right: 30,
		// 			left: 20,
		// 			bottom: 5,
		// 		}}
		// 	>
		// 		<CartesianGrid strokeDasharray="3 3" />
		// 		<XAxis dataKey="name" />
		// 		<YAxis />
		// 		<Tooltip />
		// 		<Legend />
		// 		<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
		// 		<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
		// 	</LineChart>
		// </ResponsiveContainer>
	);
}
