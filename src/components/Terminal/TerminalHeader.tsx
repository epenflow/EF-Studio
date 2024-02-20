'use client';
import React from 'react';
import { terminalHeaderClass } from './libs/ClassName';
import TerminalTitle from './TerminalTitle';
import { useTerminalProvider } from '@/utils/context/TerminalContext';
const TerminalHeaderButton = React.lazy(() => import('./TerminalHeaderButton'));
import cn from '@/utils/cn';
interface Props {
	title: string;
}
const TerminalHeader: React.FC<Props> = ({ title }) => {
	const { minimize } = useTerminalProvider();
	return (
		<div
			id='terminal__header'
			title={`terminal__header_${title.replace(' ', '-')}`}
			className={cn(
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
