import clsx, { ClassValue } from 'clsx';
import React from 'react';
interface Props {
	contentClassName?: string;
	children: React.ReactNode;
}
const TerminalContent: React.FC<Props> = ({ contentClassName, children }) => {
	const classNames = {
		default:
			'h-full rounded-b-md overflow-hidden overflow-y-scroll no-scrollbar',
	};
	return (
		<div className={clsx(classNames.default, contentClassName)}>
			{children}
		</div>
	);
};

export default TerminalContent;
