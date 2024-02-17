'use client';
import React from 'react';
import TerminalHeader from './TerminalHeader';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import TerminalModal from './TerminalModal';
import { domReady } from '@/utils/hooks/domReady';
import { useTerminalProvider } from '@/utils/context/TerminalContext';
import Condition from '@/utils/Condition';
import Comments from '@/utils/Comments';
interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	heading: string;
	fitContent?: boolean;
}

const Terminal: React.FC<Props> = ({
	children,
	heading,
	fitContent = false,
	className,
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
				createPortal(
					<>
						<Comments comment='terminal header' />
						<TerminalHeader title={heading} />
					</>,
					programWindow
				)
			}>
			<>
				<Comments comment='terminal modal' />
				<TerminalModal
					heading={heading}
					fitContent={fitContent}
					className={className}>
					{children}
				</TerminalModal>
			</>
		</Condition>
	);
};

export default dynamic(() => Promise.resolve(Terminal), {
	ssr: false,
});
