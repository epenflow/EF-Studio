'use client';
import React from 'react';
import TerminalHeader from './TerminalHeader';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import TerminalModal from './TerminalModal';
import { domReady } from '@/utils/hooks/domReady';
import { useTerminalProvider } from '@/components/Terminal/libs/TerminalContext';
import Condition from '@/utils/Condition';
type OffsetPositon = {
	x: number | string;
	y: number | string;
};
interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	heading: string;
	fitContent?: boolean;
	offsetPosition: {
		x: number | string;
		y: number | string;
	};
}

const Terminal: React.FC<Props> = ({
	children,
	heading,
	fitContent = false,
	className,
	style,
	onClick,
	offsetPosition,
}) => {
	const { minimize } = useTerminalProvider();
	const isDom = domReady();
	const programWindow = document.querySelector(
		'#program__window'
	) as HTMLElement;

	return (
		<Condition
			state={minimize}
			secondChildren={
				isDom &&
				createPortal(<TerminalHeader title={heading} />, programWindow)
			}>
			<TerminalModal
				heading={heading}
				fitContent={fitContent}
				className={className}
				style={style}
				onClick={onClick}
				offsetPosition={offsetPosition}>
				{children}
			</TerminalModal>
		</Condition>
	);
};

export default dynamic(() => Promise.resolve(Terminal), {
	ssr: false,
});
