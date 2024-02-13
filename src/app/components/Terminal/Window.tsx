import clsx from 'clsx';
import React from 'react';

const Window = () => {
	const classNames = {
		displays: 'flex flex-col gap-1 w-52',
		positions: 'fixed bottom-5 right-5',
	};
	return (
		<article
			id='program__window'
			className={clsx(
				classNames.displays,
				classNames.positions
			)}></article>
	);
};

export default Window;
