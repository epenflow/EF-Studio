import clsx from 'clsx';
import React from 'react';
import { terminalContent } from './libs/classTypes';
type TerminalContentType = React.HTMLAttributes<HTMLDivElement>;
interface Props extends TerminalContentType {}
const TerminalContent: React.FC<Props> = ({ children, className, title }) => {
	return (
		<div
			id='terminal__content'
			title={title}
			className={clsx(terminalContent.default, className)}>
			{children}
		</div>
	);
};

export default TerminalContent;
