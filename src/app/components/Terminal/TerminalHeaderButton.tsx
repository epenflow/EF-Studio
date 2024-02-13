import React from 'react';
import clsx from 'clsx';
import { Button } from './utils';
import { terminalHeaderButtonClass } from './classTypes';
const TerminalHeaderButton = () => {
	const title = {
		open: 'red__open',
		minimize: 'yellow__minimize',
		maximize: 'green__maximize',
	};
	const handleClick = Button();
	return (
		<div
			id='terminal__button'
			title='terminal__button'
			className='flex flex-row gap-1 absolute bg-default-300'>
			<button
				title={title.open}
				onClick={() => handleClick('open')}
				className={clsx(
					terminalHeaderButtonClass.buttons,
					terminalHeaderButtonClass.red
				)}></button>
			<button
				title={title.minimize}
				onClick={() => handleClick('minimize')}
				className={clsx(
					terminalHeaderButtonClass.buttons,
					terminalHeaderButtonClass.yellow
				)}></button>
			<button
				title={title.maximize}
				onClick={() => handleClick('maximize')}
				className={clsx(
					terminalHeaderButtonClass.buttons,
					terminalHeaderButtonClass.green
				)}></button>
		</div>
	);
};

export default TerminalHeaderButton;
