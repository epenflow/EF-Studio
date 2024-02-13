import React from 'react';
import { Button } from './libs';
import { terminalHeaderButtonClass } from './libs/classTypes';
import Mapping from '@/app/utils/Mapping';
import cn from '@/app/utils/cn';
import { buttons } from './libs/constants';
const TerminalHeaderButton = () => {
	const handleClick = Button();
	return (
		<div
			id='terminal__button'
			title='terminal__button'
			className='flex flex-row gap-1 absolute bg-default-300'>
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
