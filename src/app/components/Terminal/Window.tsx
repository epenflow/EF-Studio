import clsx from 'clsx';
import React from 'react';

const Window = () => {
	const classNames = {
		displays: 'flex flex-col-reverse gap-1 w-52',
		positions: 'fixed lg:bottom-10 bottom-8 lg:right-5 right-2 h-full',
	};
	return (
		<aside
			id='program__window'
			className={clsx(
				classNames.displays,
				classNames.positions,
				'overflow-y-scroll no-scrollbar'
			)}></aside>
	);
};

export default Window;
