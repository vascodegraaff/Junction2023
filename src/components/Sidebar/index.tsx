import React from 'react';
import { SidebarNavigation } from './Navigation';
import { TitleBar } from '../ListDetail/TitleBar';
import { SidebarOverlay } from './Overlay';
import { NavigationContext } from '~/pages/_app';

export default function Sidebar() {
	const { isOpen } = React.useContext(NavigationContext);
	// const scrollContainerRef = React.useRef(null);
	return (
		<>
			<nav
				// ref={scrollContainerRef}
				className={`${
					isOpen ? 'absolute inset-y-0 left-0 translate-x-0 shadow-lg' : 'absolute -translate-x-full'
				} 3xl:w-80 z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none transform flex-col overflow-y-auto border-r bg-white pb-10 transition duration-200 ease-in-out dark:bg-black sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-black 2xl:w-72`}
			>
				<TitleBar
					// scrollContainerRef={scrollContainerRef}
					leadingAccessory={null}
					title="Vasco de Graaff"
					subtitle="Software Engineer"
				/>
				<SidebarNavigation />
				{/* <UserFooter /> */}
			</nav>

			<SidebarOverlay />
		</>
	);
}
