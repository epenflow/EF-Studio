'use client';
import clsx from 'clsx';
import React from 'react';
import TerminalHeaderButton from './TerminalHeaderButton';
import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
import { terminalHeaderClass } from './libs/classTypes';
import TerminalTitle from './TerminalTitle';
interface Props {
	title: string;
}
const TerminalHeader: React.FC<Props> = ({ title }) => {
	const { minimize } = useTerminalProvider();
	return (
		<div
			id='terminal__header'
			title={`terminal__header_${title.replace(' ', '-')}`}
			className={clsx(
				terminalHeaderClass.styles,
				terminalHeaderClass.spaces,
				terminalHeaderClass.displays,
				{
					[terminalHeaderClass.variants.minimize]: !minimize,
					[terminalHeaderClass.variants.maximize]: minimize,
				}
			)}>
			<TerminalHeaderButton />
			<TerminalTitle title={title}>{title}</TerminalTitle>
		</div>
	);
};

export default TerminalHeader;
