'use client';
import React from 'react';
import clsx from 'clsx';
import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
const TerminalHeaderButton = () => {
	const { setMaximize, setMinimize, setOpen, open, maximize, minimize } =
		useTerminalProvider();
	const classNames = {
		red: 'bg-[#FD5754] border-[#DF494A]',
		yellow: 'bg-[#FEBB40] border-[#E1A034]',
		green: 'bg-[#34C848] border-[#30AB3B]',
		buttons: 'border border-solid  h-3 w-3 cursor-pointer rounded-full',
	};
	function handleClick(args: string) {
		switch (args) {
			case 'open':
				setOpen((prev) => !prev);
				console.info('open', open);
				break;
			case 'minimize':
				setMinimize((prev) => !prev);
				console.info('minimize', minimize);
				break;
			case 'maximize':
				console.info('maximize', maximize);
				setMaximize((prev) => !prev);
				break;
			default:
				throw new Error(`invalids args :${args}`);
		}
	}
	return (
		<div className='flex flex-row gap-1 absolute bg-default-300'>
			<button
				onClick={() => handleClick('open')}
				className={clsx(classNames.buttons, classNames.red)}></button>
			<button
				onClick={() => handleClick('minimize')}
				className={clsx(
					classNames.buttons,
					classNames.yellow
				)}></button>
			<button
				onClick={() => handleClick('maximize')}
				className={clsx(classNames.buttons, classNames.green)}></button>
		</div>
	);
};

export default TerminalHeaderButton;
