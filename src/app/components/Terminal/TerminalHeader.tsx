'use client';
import clsx from 'clsx';
import React from 'react';
import TerminalHeaderButton from './TerminalHeaderButton';
import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
import { terminalHeaderClass } from './classTypes';
interface Props {
	title: string;
}

const TerminalHeader: React.FC<Props> = ({ title }) => {
	const { minimize } = useTerminalProvider();

	console.info('terminaheader');
	return (
		<div
			id='terminal__header'
			title={`terminal__header_${title.replace(' ', '-')}`}
			className={clsx(
				terminalHeaderClass.styles,
				terminalHeaderClass.spaces,
				terminalHeaderClass.displays,
				!minimize === true
					? terminalHeaderClass.variants.minimize
					: terminalHeaderClass.variants.maximize
			)}>
			<TerminalHeaderButton />
			<h1
				id='terminal__title'
				title={title}
				className={clsx(terminalHeaderClass.headings)}>
				{title}
			</h1>
		</div>
	);
};

export default TerminalHeader;
