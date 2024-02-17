import Comments from '@/utils/Comments';
import cn from '@/utils/cn';
import React from 'react';

const Window = () => {
	const classNames = {
		displays: 'flex flex-col-reverse gap-1',
		positions: 'fixed lg:bottom-10 bottom-8 lg:right-5 right-2 h-full',
	};
	return (
		<>
			<Comments comment='this render aside program window' />
			<aside
				id='program__window'
				className={cn(
					classNames.displays,
					classNames.positions,
					'overflow-y-scroll no-scrollbar'
				)}
			/>
		</>
	);
};

export default Window;
