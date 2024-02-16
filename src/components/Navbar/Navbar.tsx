'use client';
import React from 'react';
import cn from '../../utils/cn';
import Link from 'next/link';
import { BodyPortal } from '@/utils/BodyPortal';
import Modal from '../Modal';
import Info from '../Info';
const Navbar = () => {
	const [isHover, setHover] = React.useState<boolean>(false);
	const [isModal, setModal] = React.useState<boolean>(false);
	function hover() {
		setHover((prev) => !prev);
	}
	function modal() {
		setModal((prev) => !prev);
	}
	return (
		<header className='fixed top-0 left-0 z-50'>
			<div className='w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs'>
				<h1>epenflow</h1>
				<div className='flex flex-row'>
					<button
						className='flex items-center justify-center gap-1 cursor-pointer capitalize'
						onMouseEnter={hover}
						onMouseLeave={hover}
						onClick={modal}>
						<span
							className={cn(
								'h-4 w-4 rounded-full border border-solid border-black block',
								isHover && 'bg-black'
							)}
						/>
						info,
					</button>
					<Link href={'/projects'}>&nbsp;projects</Link>
				</div>
			</div>
			<BodyPortal show={isModal}>
				<Modal>
					<div className='bg-white lg:w-1/2 w-4/5 h-4/5 p-2 relative '>
						<div className='flex flex-row items-center justify-between font-medium'>
							<h1>Info</h1>
							<button
								onClick={modal}
								onMouseEnter={hover}
								onMouseLeave={hover}
								className='flex items-center justify-center gap-1 hover:underline'>
								<span
									className={cn(
										'h-4 w-4 rounded-full border border-solid border-black block',
										isHover && 'bg-black'
									)}
								/>
								Close
							</button>
						</div>
						<h1 className='text-2xl lg:text-6xl capitalize absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
							this page will be updated
						</h1>
					</div>
				</Modal>
			</BodyPortal>
		</header>
	);
};

export default Navbar;
