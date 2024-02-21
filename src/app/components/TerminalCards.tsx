import React, { HTMLAttributes } from 'react';
import { TerminalProvider } from '@/components/Terminal/libs/TerminalContext';
import Terminal from '../../components/Terminal/Terminal';
import TerminalContent from '../../components/Terminal/TerminalContent';
import cn from '@/utils/cn';
interface Props extends HTMLAttributes<HTMLDivElement> {
	contentClassNames?: string;
	heading: string;
	offsetPosition: {
		x: number | string;
		y: number | string;
	};
}
const TerminalCards = ({
	onClick,
	style,
	children,
	contentClassNames,
	heading,
	className,
	offsetPosition,
}: Props) => {
	return (
		<TerminalProvider>
			<Terminal
				heading={heading}
				className={cn('bg-default-300', className)}
				onClick={onClick}
				style={style}
				offsetPosition={offsetPosition}>
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
