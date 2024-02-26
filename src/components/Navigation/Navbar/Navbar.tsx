'use client';
import React from 'react';
import cn from '../../../utils/cn';
import Link from 'next/link';
import NavigationWrapper from '../NavigationWrapper';
const Navbar = () => {
	const [isHover, setHover] = React.useState<boolean>(false);
	function hover() {
		setHover((prev) => !prev);
	}
	const classNames = {
		header: 'fixed top-0 left-0 z-50',
		wrapper:
			'w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs',
	};
	return (
		<NavigationWrapper
			element='header'
			title='navigation__container/navbar'
			className={cn(classNames.header)}>
			<Link
				href={'/'}
				scroll={false}>
				<span>epen//flow©️</span>
			</Link>
			<div className='flex flex-row'>
				<Link
					scroll={false}
					href={'/info'}
					className='flex items-center justify-center gap-1 capitalize cursor-pointer'
					onMouseEnter={hover}
					onMouseLeave={hover}>
					<span
						className={cn(
							'h-4 w-4 rounded-full border border-solid border-black block',
							isHover && 'bg-black'
						)}
					/>
					info,
				</Link>
				<Link href={'/projects'}>&nbsp;projects</Link>
			</div>
		</NavigationWrapper>
	);
};

export default Navbar;
