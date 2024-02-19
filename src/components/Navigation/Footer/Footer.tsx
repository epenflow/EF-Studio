import React from 'react';
import FooterTimes from './FooterTimes';
import Link from 'next/link';
import NavigationWrapper from '../NavigationWrapper';
import cn from '@/utils/cn';

const Footer = () => {
	const classNames = {
		footer: `fixed bottom-0 left-0`,
		wrapper: `w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs`,
	};
	return (
		<NavigationWrapper
			element='footer'
			title='navigation__container/footer'
			className={cn(classNames.footer)}>
			<div className='flex flex-row items-center'>
				<Link href={'https://www.instagram.com/epenflow/'}>
					<h1>instagram,</h1>
				</Link>
				<Link href={'https://www.threads.net/@epenflow'}>
					<h1>&nbsp;threads</h1>
				</Link>
			</div>
			<FooterTimes />
			<h1>send an email</h1>
		</NavigationWrapper>
	);
};

export default Footer;
