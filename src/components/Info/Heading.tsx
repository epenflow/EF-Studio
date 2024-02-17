import cn from '@/utils/cn';
import React, { HTMLAttributes } from 'react';

const Heading: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
	children,
	className,
}) => {
	return (
		<h1
			className={cn(
				'capitalize text-xs font-medium mt-2 mb-3',
				className
			)}>
			{children}
		</h1>
	);
};

export default Heading;
