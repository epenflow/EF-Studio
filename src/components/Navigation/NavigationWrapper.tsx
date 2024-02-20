import cn from '@/utils/cn';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	element?: keyof React.JSX.IntrinsicElements;
}
const NavigationWrapper = ({
	element,
	className,
	children,
	title,
	id,
}: Props) => {
	const Element = (element as keyof JSX.IntrinsicElements) ?? 'div';
	const wrapper = `w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs`;
	const titleWrapper = `navigation__wrapper`;
	return (
		<Element
			title={title}
			id={id}
			className={cn(className, 'flex items-center justify-center ')}>
			<div
				title={titleWrapper}
				className={cn(wrapper)}>
				{children}
			</div>
		</Element>
	);
};

export default NavigationWrapper;
