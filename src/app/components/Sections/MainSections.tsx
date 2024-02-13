'use client';
import { TerminalProvider } from '@/app/utils/context/TerminalContext';
import Terminal from '../Terminal/Terminal';
import Caution from '../Caution';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import TerminalContent from '../Terminal/TerminalContent';
import TerminalHeader from '../Terminal/TerminalHeader';

const MainSections = () => {
	const [hover, setHover] = React.useState<boolean>(false);
	function handleHover() {
		setHover((prev) => !prev);
	}
	return (
		<section className='overflow-hidden'>
			<TerminalProvider>
				<Terminal
					heading='__epenflow__'
					fitContent={true}>
					<TerminalContent className='flex flex-col items-center justify-center bg-white'>
						<Caution />
					</TerminalContent>
				</Terminal>
			</TerminalProvider>
			<div className='h-screen w-screen flex items-center justify-center'>
				<h1 className='absolute top-5 text-justify p-4 text-7xl lg:text-8xl font-bold text-default-200 mix-blend-difference'>
					[S—P] 2024—13
				</h1>
				<div
					className='cursor-pointer'
					onMouseEnter={handleHover}
					onMouseLeave={handleHover}>
					<Caution />
				</div>
				<div
					className={clsx(
						'-z-10 absolute top-0 left-0 bg-cover',
						hover ? 'w-full h-full' : 'h-0 w-0'
					)}
					style={{
						backgroundImage: `url('/consts.gif')`,
					}}></div>
			</div>
		</section>
	);
};

export default MainSections;
