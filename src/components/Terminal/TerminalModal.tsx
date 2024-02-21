'use client';
import React from 'react';
import { terminalClass } from './libs/ClassName';
import TerminalHeader from './TerminalHeader';
import { useTerminalProvider } from './libs/TerminalContext';
import cn from '@/utils/cn';
import Draggable from 'react-draggable';
interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	heading: string;
	fitContent?: boolean;
	offsetPosition: {
		x: number | string;
		y: number | string;
	};
}

const TerminalModal: React.FC<Props> = ({
	children,
	heading,
	fitContent = false,
	className,
	style,
	onClick,

	offsetPosition,
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
			onClick={onClick}
			className={cn(
				maximize && [
					terminalClass.positions,
					terminalClass.modal,
					className,
				]
			)}
			style={style}>
			<Draggable
				positionOffset={{
					x: !maximize ? offsetPosition.x : 0,
					y: !maximize ? offsetPosition.y : 0,
				}}
				handle='#terminal__title'>
				<div
					id='terminal'
					title='terminal__content_wrapper'
					style={style}
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
