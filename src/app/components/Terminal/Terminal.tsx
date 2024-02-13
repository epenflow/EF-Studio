'use client';
import React from 'react';
import TerminalHeader from './TerminalHeader';
import clsx from 'clsx';
import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
import Condition from '@/app/utils/Condition';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { terminalClass } from './classTypes';
import cn from '@/app/utils/cn';
interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	heading: string;
	fitContent?: boolean;
}
const Terminal: React.FC<Props> = ({
	children,
	heading,
	fitContent = false,
}) => {
	const { maximize, minimize } = useTerminalProvider();
	const [isDom, setDom] = React.useState(false);
	const programWindow = document.querySelector(
		'#program__window'
	) as HTMLElement;

	React.useEffect(() => {
		setDom((isDom) => (isDom = true));
		if (maximize) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [maximize]);
	return (
		<Condition
			state={minimize}
			secondChildren={
				isDom &&
				createPortal(<TerminalHeader title={heading} />, programWindow)
			}>
			<div
				id='terminal__programs'
				title='terminal__programs_modal'
				className={clsx(
					maximize && [terminalClass.positions, terminalClass.modal]
				)}>
				<div
					id='terminal'
					title='terminal__content_wrapper'
					className={cn(
						terminalClass.styles,
						maximize === true
							? terminalClass.sizes.lg
							: [
									!fitContent && terminalClass.sizes.md,
									terminalClass.positions,
							  ]
					)}>
					<TerminalHeader title={heading} />
					{children}
				</div>
			</div>
		</Condition>
	);
};

export default dynamic(() => Promise.resolve(Terminal), {
	ssr: false,
});
