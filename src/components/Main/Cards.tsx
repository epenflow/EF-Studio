'use client';
import React from 'react';
import Caution from '../Caution';
import cn from '@/utils/cn';

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
				className={cn(
					'-z-10 absolute top-0 left-0 bg-cover',
					hover ? 'w-full h-full' : 'h-0 w-0'
				)}
				style={{
					backgroundImage: `url('/consts.gif')`,
				}}
			/>
		</div>
	);
};
export default Cards;
