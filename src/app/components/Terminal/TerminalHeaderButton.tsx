'use client';
import React from 'react';
import { Button } from './libs';
import { terminalHeaderButtonClass } from './libs/classTypes';
import Mapping from '@/app/utils/Mapping';
import cn from '@/app/utils/cn';
import { buttons } from './libs/constants';
import { useTerminalProvider } from '@/app/utils/context/TerminalContext';
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
							terminalHeaderButtonClass.buttons,
							item.classNames
						)}
						onClick={() => handleClick(item.actions)}
					/>
				)}
			/>
		</div>
	);
};

export default TerminalHeaderButton;
