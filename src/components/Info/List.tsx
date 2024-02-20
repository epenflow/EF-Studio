'use client';
import cn from '@/utils/cn';
import React, { HTMLAttributes } from 'react';
const List: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
	children,
	className,
}) => {
	const [isHover, setHover] = React.useState<boolean>(false);
	function hover() {
		setHover((prev) => !prev);
	}
	return (
		<span
			onMouseEnter={hover}
			onMouseLeave={hover}
			className={cn(
				'flex flex-row gap-1 items-center cursor-pointer text-xs capitalize',
				className
			)}>
			<span
				className={cn(
					'w-2 h-2 rounded-full border-[1px] border-solid border-default-400 bg-default-300',
					isHover && ' bg-[#007AFF] border-[#c9e3ff]'
				)}
			/>
			{children}
		</span>
	);
};
export default List;
