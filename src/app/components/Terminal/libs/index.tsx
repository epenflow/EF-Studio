'use client';

import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
export function Button() {
	const { setMaximize, setMinimize, setOpen, open, maximize, minimize } =
		useTerminalProvider();
	function handleClick(args: string) {
		switch (args) {
			case 'open':
				setOpen((prev) => !prev);
				break;
			case 'minimize':
				setMinimize((prev) => !prev);
				break;
			case 'maximize':
				setMaximize((prev) => !prev);
				break;
			default:
				throw new Error(`invalids args :${args}`);
		}
	}
	return handleClick;
}
