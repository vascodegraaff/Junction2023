import * as React from 'react';
// import { MapPin } from 'react-feather';

// import Button from './components/Button'
import { Detail } from '../components/ListDetail/Detail';
import { SiteLayout } from '~/components/Layout';
import {TitleBar } from '~/components/ListDetail/TitleBar';
// import { TitleBar } from './components/ListDetail/TitleBar'

function SectionTitle(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h4
			className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
			{...props}
		/>
	);
}

function SectionContent(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
	return <div className="col-span-10" {...props} />;
}

interface TableRowProps {
	href: string;
	title: string;
	date: string;
	subtitle?: string;
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
	return (
		<a target="_blank" rel="noopener noreferrer" href={href} className="flex items-center space-x-4 group">
			<strong className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
				{title}
			</strong>
			<span className="w-full border-t border-white border-dashed shrink dark:border-gray-800" />
			{subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
			{date && <span className="flex-none font-mono text-quaternary">{date}</span>}
		</a>
	);
}

function SectionContainer(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
	return <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12" {...props} />;
}

const workHistory = [
	{
		href: 'https://bunq.com',
		title: 'bunq',
		subtitle: 'Backend Engineer',
		date: 'Aug 2022—Present',
	},
	{
		href: '',
		title: 'NextFence',
		subtitle: 'Software Engineering Internship',
		date: 'Apr 2022—Jun 2022',
	},
	{
		href: 'https://breeze.social/',
		title: 'Breeze',
		subtitle: 'Flutter developer internship',
		date: 'Jul 2021-Aug 2021',
	},
];

export default function Home() {
	// const scrollContainerRef = React.useRef(null)
	// const titleRef = React.useRef(null)

	return (
		<Detail.Container data-cy="home-intro" ref={null}>
			<TitleBar
        magicTitle
        // titleRef={titleRef}
        // scrollContainerRef={scrollContainerRef}
        title="Home"
      />

			{/* Keep this div to trigger the magic scroll */}
			<div className="p-4" ref={null} />

			<Detail.ContentContainer>
				<div className="pb-24 space-y-8 md:space-y-16">
					<SectionContainer>
						<SectionTitle />
						<SectionContent>
							<div className="prose text-primary">
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore illo fugit, quisquam tenetur
									perferendis animi beatae vero, nisi ullam nam deserunt voluptatibus aliquam! Obcaecati nisi amet
									delectus illum ab nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
								</div>
							</div>
						</SectionContent>
					</SectionContainer>
					{/* <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <Image
                priority
                src="/static/img/sf.png"
                width={800}
                height={400}
                layout="responsive"
                className="rounded-2xl"
                quality={100}
                alt="Map of San Francisco with blue location dot in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>San Francisco, CA</span>
              </p>
            </SectionContent>
          </SectionContainer> */}

					<SectionContainer>
						<SectionTitle>Work</SectionTitle>
						<SectionContent>
							<div className="flex flex-col space-y-3">
								{workHistory.map((job) => (
									<TableRow href={job.href} title={job.title} subtitle={job.subtitle} date={job.date} key={job.href} />
								))}
							</div>
						</SectionContent>
					</SectionContainer>
				</div>
			</Detail.ContentContainer>
		</Detail.Container>
	);
}


Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <SiteLayout>
			 {page}
    </SiteLayout>
  )
}
