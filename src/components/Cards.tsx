import cn from '@/utils/cn';
import React, { HTMLAttributes } from 'react';

const Cards: React.FC<HTMLAttributes<HTMLDivElement>> = ({
	className,
	children,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={cn('bg-white border-default', className)}>
			{children}
		</div>
	);
};

export default Cards;
