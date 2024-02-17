'use client';
import React from 'react';
import cn from '../../utils/cn';
import Link from 'next/link';
const Navbar = () => {
	const [isHover, setHover] = React.useState<boolean>(false);
	function hover() {
		setHover((prev) => !prev);
	}
	return (
		<header className='fixed top-0 left-0 z-50'>
			<div className='w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs'>
				<Link href={'/'}>
					<span>epen//flow©️</span>
				</Link>
				<div className='flex flex-row'>
					<Link
						href={'/info'}
						className='flex items-center justify-center gap-1 cursor-pointer capitalize'
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
			</div>
		</header>
	);
};

export default Navbar;
