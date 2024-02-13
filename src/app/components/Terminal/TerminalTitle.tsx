import React from 'react';
import clsx from 'clsx';
import { terminalHeaderClass } from './libs/classTypes';

const TerminalTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
	children,
	title,
}) => {
	return (
		<h1
			id='terminal__title'
			title={title}
			className={clsx(terminalHeaderClass.headings)}>
			{children}
		</h1>
	);
};

export default TerminalTitle;
