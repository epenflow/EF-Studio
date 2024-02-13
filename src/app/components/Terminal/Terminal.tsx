'use client';
import React from 'react';
import TerminalHeader from './TerminalHeader';
import TerminalContent from './TerminalContent';
import clsx from 'clsx';
import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
import Condition from '@/app/utils/Condition';
import { createPortal } from 'react-dom';
interface Props {
	children: React.ReactNode;
	contentClassNames?: string;
	title: string;
}
const Terminal: React.FC<Props> = ({
	children,
	contentClassNames,
	title,
}: Props) => {
	const { open, maximize, minimize } = useTerminalProvider();
	const [isDom, setDom] = React.useState(false);
	const programWindow = document.querySelector(
		'#program__window'
	) as HTMLElement;
	const classNames = {
		positions: 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
		styles: 'bg-default-200 border-default rounded-md flex flex-col shadow-default-200',
		sizes: {
			lg: 'h-4/5 w-4/5',
			md: 'h-[50vh] lg:h-4/5 w-4/5 lg:w-1/2',
		},
		modal: 'bg-[#00ff00] w-screen h-screen flex items-center justify-center',
	};
	React.useEffect(() => {
		setDom((isDom) => (isDom = true));
		if (maximize) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [maximize]);
	console.info('terminal');
	return (
		<Condition
			state={!minimize}
			secondChildren={
				isDom &&
				createPortal(<TerminalHeader title={title} />, programWindow)
			}>
			<div
				className={clsx(
					maximize && [classNames.positions, classNames.modal]
				)}>
				<div
					className={clsx(
						classNames.styles,
						maximize === true
							? classNames.sizes.lg
							: [classNames.sizes.md, classNames.positions]
					)}>
					<TerminalHeader title={title} />
					<TerminalContent contentClassName={contentClassNames}>
						{children}
					</TerminalContent>
				</div>
			</div>
		</Condition>
	);
};

export default Terminal;
