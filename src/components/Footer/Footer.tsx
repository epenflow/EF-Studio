import React from 'react';
import FooterTimes from './FooterTimes';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='fixed bottom-0 left-0'>
			<div className='w-screen flex flex-row justify-between items-center lg:px-10 px-2 py-2  font-bold lg:font-medium lg:text-lg capitalize text-xs'>
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
			</div>
		</footer>
	);
};

export default Footer;
