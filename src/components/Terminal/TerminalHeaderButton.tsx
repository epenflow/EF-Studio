'use client';
import React from 'react';
import { Button } from './libs/Button';
import { terminalHeaderButtonClass } from './libs/ClassName';
import { buttons } from './libs/Constant';
import { useTerminalProvider } from '@/components/Terminal/libs/TerminalContext';
import Mapping from '@/utils/Mapping';
import cn from '@/utils/cn';
const TerminalHeaderButton = () => {
	const handleClick = Button();
	const { minimize } = useTerminalProvider();
	return (
		<div
			id='terminal__button'
			title='terminal__button'
			className={cn(
				'flex flex-row gap-1 bg-default-300',
				minimize && 'absolute'
			)}>
			<Mapping
				of={buttons}
				render={(item, index) => (
					<button
						id={item.title}
						key={index}
						className={cn(
							item.classNames,
							terminalHeaderButtonClass.buttons
						)}
						onClick={() => handleClick(item.actions)}
					/>
				)}
			/>
		</div>
	);
};

export default TerminalHeaderButton;
