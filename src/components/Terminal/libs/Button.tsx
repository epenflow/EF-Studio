'use client';

import { useTerminalProvider } from '@/utils/context/TerminalContext';
import { TActions } from './Constant';

export function Button() {
	const { setMaximize, setMinimize, setOpen, open, maximize, minimize } =
		useTerminalProvider();
	function handleClick(args: TActions) {
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
