import React from 'react';
import { terminalHeaderClass } from './libs/ClassName';
import cn from '@/utils/cn';

const TerminalTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
	children,
	title,
}) => {
	return (
		<h1
			id='terminal__title'
			title={title}
			className={cn(
				terminalHeaderClass.headings,
				'overflow-hidden cursor-text'
			)}>
			{children}
		</h1>
	);
};

export default TerminalTitle;
