import React, { HTMLAttributes } from 'react';
import { TerminalProvider } from '@/utils/context/TerminalContext';
import Terminal from '../Terminal/Terminal';
import TerminalContent from '../Terminal/TerminalContent';
import cn from '@/utils/cn';
interface Props extends HTMLAttributes<HTMLDivElement> {
	contentClassNames?: string;
	heading: string;
	defaultPositionX: number | string;
	defaultPositionY: number | string;
}
const TerminalCards = ({
	onClick,
	style,
	children,
	contentClassNames,
	heading,
	defaultPositionX,
	defaultPositionY,
}: Props) => {
	return (
		<TerminalProvider>
			<Terminal
				heading={heading}
				className={cn('bg-default-300')}
				onClick={onClick}
				style={style}
				defaultPositionX={defaultPositionX}
				defaultPositionY={defaultPositionY}>
				<TerminalContent
					className={cn(
						'flex flex-col p-2 text-lg font-medium bg-white gap-1 lg:text-xl cursor-auto overflow-hidden overflow-y-scroll no-scrollbar',
						contentClassNames
					)}>
					{children}
				</TerminalContent>
			</Terminal>
		</TerminalProvider>
	);
};
export default TerminalCards;
