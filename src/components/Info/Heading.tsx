import cn from '@/utils/cn';
import React, { HTMLAttributes } from 'react';

const Heading: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
	children,
	className,
}) => {
	return (
		<h1
			className={cn(
				'capitalize text-xs font-medium cursor-text',
				className
			)}>
			{children}
		</h1>
	);
};

export default Heading;
