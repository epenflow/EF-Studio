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
import TerminalTitle from '../Terminal/TerminalTitle';
import Mapping from '@/app/utils/Mapping';
const Cards = () => {
	const [hover, setHover] = React.useState<boolean>(false);
	function handleHover() {
		setHover((prev) => !prev);
	}
	return (
		<div className='h-screen w-screen flex items-center justify-center'>
			<h1 className='absolute top-5 text-justify p-4 text-7xl lg:text-8xl font-bold text-default-200 mix-blend-difference'>
				[SS] 2024—Winter/23
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
	);
};
const MainSections = () => {
	return (
		<section className='overflow-hidden'>
			<TerminalProvider>
				<Terminal
					heading={`__note__from/epenflow`}
					className='bg-black bg-opacity-50'>
					<TerminalContent className='flex flex-col p-2 text-lg font-medium bg-white gap-1 lg:text-xl'>
						<h1 className='text-end'>Dear visitors,</h1>
						<div className='text-justify'>
							<p>
								As the developer behind the scenes, I’m thrilled
								to share some exciting news with you. Our
								brand-new website, is currently under
								construction.🚧
							</p>
							<p>
								The virtual blueprints📑 are laid out, the
								pixels are aligning, and the code is humming
								with anticipation. We’re crafting an online
								space where creativity will flow like a gentle
								stream, where ideas will blossom, and where
								inspiration will find its home.
							</p>
							<p>
								In the coming days📆, you’ll witness the
								transformation – a metamorphosis of design,
								functionality, and purpose. It’s like planting
								seeds in a digital garden, tending to them with
								care, and watching them bloom into something
								extraordinary.
							</p>
							<p>
								So, dear visitors, bear with us as we hammer
								away at the keyboard, paint with pixels, and
								sculpt the future. Your patience is our fuel,
								and your curiosity is our compass.
							</p>
							<p>
								Thank you for being part of this journey.
								Together, we’re building more than a website;
								we’re creating a digital sanctuary.
							</p>
						</div>
						<span className='text-end'>
							<h1>Warm regards,</h1>
							<h1>Epen Flow©️22</h1>
						</span>
					</TerminalContent>
				</Terminal>
			</TerminalProvider>
			<Cards />
		</section>
	);
};

export default MainSections;
