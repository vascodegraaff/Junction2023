import Link from 'next/link';
import * as React from 'react';
import { ArrowLeft, Menu, X } from 'react-feather';

import { NavigationContext } from '~/pages/_app';

interface Props {
	title: string;
	subtitle?: string | null;
	globalMenu?: boolean;
	backButton?: boolean;
	backButtonHref?: string;
	magicTitle?: boolean;
	titleRef?: React.MutableRefObject<HTMLParagraphElement> | null;
  // scrollContainerRef?: React.MutableRefObject<HTMLDivElement>
	children?: React.ReactNode;
	leadingAccessory?: React.ReactNode;
	trailingAccessory?: React.ReactNode;
}

export function TitleBar({
	title,
	subtitle = null,
	globalMenu = true,
	backButton = false,
	backButtonHref,
	magicTitle = false,
	titleRef = null,
	// scrollContainerRef,
	leadingAccessory = null,
	trailingAccessory = null,
	children,
}: Props) {
	const { isOpen, setIsOpen } = React.useContext(NavigationContext);
	const [darkMode, setDarkMode] = React.useState(false);
	const [offset, setOffset] = React.useState(200);
	const [opacity, _setOpacity] = React.useState(0);
	const [currentScrollOffset, _setCurrentScrollOffset] = React.useState(0);

	const [initialTitleOffsets, _setInitialTitleOffsets] = React.useState({
		top: 0,
		bottom: 0,
	});

	const initialTitleOffsetsRef = React.useRef(initialTitleOffsets);
	// const setInitialTitleOffsets = (data: any) => {
	// 	initialTitleOffsetsRef.current = data;
	// 	_setInitialTitleOffsets(data);
	// };

	const opacityRef = React.useRef(opacity);
	// const setOpacity = (data: any) => {
	// 	opacityRef.current = data;
	// 	_setOpacity(data);
	// };

	const currentScrollOffsetRef = React.useRef(currentScrollOffset);
	// const setCurrentScrollOffset = (data: any) => {
	// 	currentScrollOffsetRef.current = data;
	// 	_setCurrentScrollOffset(data);
	// };

	const handler = React.useCallback(() => {
		// const shadowOpacity = scrollContainerRef ? scrollContainerRef.current.scrollTop / 200 : 0;
		// setCurrentScrollOffset(shadowOpacity > 0.12 ? 0.12 : shadowOpacity);

		if (!titleRef?.current || !initialTitleOffsetsRef?.current) return;

		const titleTop = titleRef.current.getBoundingClientRect().top - 48;
		const titleBottom = titleRef.current.getBoundingClientRect().bottom - 56;
		const initialOffsets = initialTitleOffsetsRef.current;

		// let offsetAmount = parseFloat((titleBottom / initialOffsets.bottom).toFixed(2)) * 100;

		// let opacityOffset = parseFloat((titleTop / initialOffsets.top).toFixed(2)) * -1;

		// setOffset(Math.min(Math.max(offsetAmount, 0), 100));
		// setOpacity(opacityOffset);
	}, [title, titleRef]);

	// React.useEffect(() => {
	// 	scrollContainerRef?.current?.addEventListener('scroll', handler);
	// 	return () => scrollContainerRef?.current?.removeEventListener('scroll', handler);
	// }, [title, titleRef, scrollContainerRef]);

	// React.useEffect(() => {
	// 	if (!titleRef?.current || !scrollContainerRef?.current) return;
	// 	scrollContainerRef.current.scrollTop = 0;
	// 	setOpacity(0);
	// 	setInitialTitleOffsets({
	// 		bottom: titleRef.current.getBoundingClientRect().bottom - 56,
	// 		top: titleRef.current.getBoundingClientRect().top - 48,
	// 	});
	// }, [title, titleRef, scrollContainerRef]);

	React.useEffect(() => {
		const isDarkMode = window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches;
		if (isDarkMode) setDarkMode(true);
	}, []);

	return (
		<>
			<div
				style={{
					background: `rgba(${darkMode ? '50,50,50' : '255,255,255'},${
						currentScrollOffset === 0
							? currentScrollOffset
							: darkMode
							? currentScrollOffset + 0.5
							: currentScrollOffset + 0.8
					})`,
					boxShadow: `0 1px 3px rgba(0,0,0,${currentScrollOffset})`,
					minHeight: '48px',
				}}
				className={`filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900`}
			>
				<div className="flex items-center justify-between flex-none">
					<span className="flex items-center space-x-3">
						{globalMenu && (
							<button
                type="button"
								onClick={() => setIsOpen(!isOpen)}
								className="flex items-center justify-center p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
							>
								{isOpen ? <X size={16} className="text-primary" /> : <Menu size={16} className="text-primary" />}
							</button>
						)}

						{backButton && (
							<Link
								href={backButtonHref ?? '#'}
								className="flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
							>
								<ArrowLeft size={16} className="text-primary" />
							</Link>
						)}

						{leadingAccessory && <>{leadingAccessory}</>}

						<div className="flex-col">
							<h2
								style={
									magicTitle
										? {
												transform: `translateY(${offset}%)`,
												opacity: `${opacity}`,
										  }
										: {}
								}
								className="text-sm font-bold text-primary transform-gpu line-clamp-1"
							>
								{title}
							</h2>
							{subtitle && <h2 className="text-gray-400 text-sm">{subtitle}</h2>}
						</div>
					</span>

					{trailingAccessory && <>{trailingAccessory}</>}
				</div>

				<div>{children}</div>
			</div>
		</>
	);
}
