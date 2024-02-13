'use client';
import clsx from 'clsx';
import React from 'react';
import TerminalHeaderButton from './TerminalHeaderButton';
import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
interface Props {
	title: string;
}
const TerminalHeader: React.FC<Props> = ({ title }) => {
	const { minimize } = useTerminalProvider();
	const classNames = {
		styles: 'bg-default-300 border-solid border-default-400 shadow-default-100',
		spaces: 'p-2',
		displays: 'flex flex-row items-center relative',
		headings: 'w-full text-center text-xs font-semibold',
		variants: {
			minimize: 'border-[1px] rounded-md',
			maximize: 'border-b-[1px] rounded-t-md',
		},
	};
	console.info('terminaheader');
	return (
		<div
			className={clsx(
				classNames.styles,
				classNames.spaces,
				classNames.displays,
				!minimize === true
					? classNames.variants.minimize
					: classNames.variants.maximize
			)}>
			<TerminalHeaderButton />
			<h1 className={clsx(classNames.headings)}>{title}</h1>
		</div>
	);
};

export default TerminalHeader;
