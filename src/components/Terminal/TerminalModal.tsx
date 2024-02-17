'use client';
import React from 'react';
import { terminalClass } from './libs/ClassName';
import TerminalHeader from './TerminalHeader';
import { useTerminalProvider } from '@/utils/context/TerminalContext';
import cn from '@/utils/cn';
import Draggable from 'react-draggable';
interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	heading: string;
	fitContent?: boolean;
}

const TerminalModal: React.FC<Props> = ({
	children,
	heading,
	fitContent = false,
	className,
}) => {
	const { maximize } = useTerminalProvider();
	React.useEffect(() => {
		if (maximize) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [maximize]);
	return (
		<div
			id='terminal__programs'
			title='terminal__programs_modal'
			className={cn(
				maximize && [
					terminalClass.positions,
					terminalClass.modal,
					className,
				]
			)}>
			<Draggable
				positionOffset={{
					x: !maximize ? '-50%' : 0,
					y: !maximize ? '-50%' : 0,
				}}
				handle='#terminal__title'>
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
			</Draggable>
		</div>
	);
};

export default TerminalModal;
